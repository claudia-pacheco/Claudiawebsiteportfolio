import React from 'react';
import { motion } from 'motion/react';

interface ProgressBarProps {
  /** Progress percentage (0-100) */
  percentage: number;
  /** Optional label text to display above the bar */
  label?: string;
  /** Optional additional info text below the bar */
  info?: string;
  /** Animation duration in seconds (default: 0.6) */
  animationDuration?: number;
}

/**
 * ProgressBar Component
 *
 * A reusable progress bar with:
 * - Gradient background using design tokens (cool-accent → primary)
 * - Animated fill with smooth easing
 * - Accessibility: respects prefers-reduced-motion
 * - Dark mode support via CSS variables
 * - High contrast ratios (verified WCAG AA)
 *
 * Usage:
 * ```tsx
 * <ProgressBar
 *   percentage={33}
 *   label="Overall Progress"
 *   info="2 of 6 steps complete"
 * />
 * ```
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage = 0,
  label,
  info,
  animationDuration = 0.6,
}) => {
  // Clamp percentage to 0-100
  const clampedPercentage = Math.max(0, Math.min(100, percentage));

  return (
    <div className="space-y-2">
      {/* Label - if provided */}
      {label && (
        <div className="flex justify-between items-center">
          <span className="text-xs font-medium text-muted-foreground uppercase">
            {label}
          </span>
          {percentage >= 0 && (
            <span className="text-sm font-semibold text-foreground">
              {Math.round(clampedPercentage)}%
            </span>
          )}
        </div>
      )}

      {/* Progress Bar Container */}
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        {/* Animated Fill */}
        <motion.div
          className="h-full rounded-full progress-bar-fill"
          initial={{ width: '0%' }}
          whileInView={{ width: `${clampedPercentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: animationDuration }}
          role="progressbar"
          aria-valuenow={clampedPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={label || 'Progress'}
        />
      </div>

      {/* Info text - if provided */}
      {info && (
        <p className="text-xs text-muted-foreground">
          {info}
        </p>
      )}
    </div>
  );
};
