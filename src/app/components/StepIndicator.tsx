import React from 'react';

export type StepStatus = 'done' | 'active' | 'pending';

interface StepIndicatorProps {
  /** Current status of the step */
  status: StepStatus;
  /** Whether this is the last step (no connector line) */
  isLast?: boolean;
  /** Step label/title */
  label: string;
  /** Step detail/description */
  detail: string;
  /** Show "NOW" badge for active steps */
  showBadge?: boolean;
}

/**
 * StepIndicator Component
 *
 * A reusable step indicator for timelines/workflows with:
 * - Visual status indicators (done: checkmark, active: circle, pending: outline)
 * - Connecting lines between steps
 * - "NOW" badge for active steps
 * - Accessibility: semantic HTML, ARIA labels, color + icon indicators
 * - Design system tokens for colors and animations
 * - High contrast in both light and dark modes
 *
 * Usage:
 * ```tsx
 * <StepIndicator
 *   status="done"
 *   label="Design & Wireframing"
 *   detail="Brand identity, design tokens, color palette, typography"
 * />
 * ```
 */
export const StepIndicator: React.FC<StepIndicatorProps> = ({
  status,
  isLast = false,
  label,
  detail,
  showBadge = false,
}) => {
  const isDone = status === 'done';
  const isActive = status === 'active';
  const isPending = status === 'pending';

  const connectorClasses: Record<StepStatus, string> = {
    done: 'timeline-connector-done',
    active: 'timeline-connector-active',
    pending: 'timeline-connector-pending',
  };

  return (
    <div className="flex gap-3.5 relative">
      {/* Vertical connector line to next step */}
      {!isLast && (
        <div
          className={`absolute left-2.5 top-5 bottom-0 w-px ${connectorClasses[status]}`}
          aria-hidden="true"
        />
      )}

      {/* Step Status Indicator */}
      <div className="flex-shrink-0 pt-1.5">
        {isDone && (
          <div
            className="timeline-step-done"
            aria-label="Step completed"
            role="img"
          >
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
              <path
                d="M1 4L3.5 6.5L9 1.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
        {isActive && (
          <div
            className="timeline-step-active"
            aria-label="Current step"
            aria-current="step"
            role="img"
          >
            <div className="timeline-step-active-indicator" />
          </div>
        )}
        {isPending && (
          <div
            className="timeline-step-pending"
            aria-label="Step not started"
            role="img"
          />
        )}
      </div>

      {/* Step Content */}
      <div className="pt-0.5 flex-1">
        <div className="flex items-center gap-2">
          <p
            className={`text-sm font-semibold ${
              isPending ? 'text-muted-foreground' : 'text-foreground'
            }`}
          >
            {label}
          </p>
          {isActive && showBadge && (
            <span
              className="status-badge-now"
              aria-label="Currently in progress"
            >
              NOW
            </span>
          )}
        </div>
        <p
          className={`text-xs mt-0.5 leading-relaxed ${
            isPending ? 'text-muted-foreground' : 'text-muted-foreground'
          }`}
        >
          {detail}
        </p>
      </div>
    </div>
  );
};
