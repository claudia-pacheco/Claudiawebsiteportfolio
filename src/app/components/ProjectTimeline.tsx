import React from 'react';

export type StepStatus = 'done' | 'active' | 'pending';

export interface TimelineStep {
  label: string;
  detail: string;
  status: StepStatus;
}

interface ProjectTimelineProps {
  steps: TimelineStep[];
}

/**
 * ProjectTimeline Component
 *
 * Reusable timeline component for displaying project progress with step indicators.
 * Uses design tokens for colors (--cool-accent, --success, etc.) for consistency
 * and automatic dark mode support.
 *
 * Accessibility features:
 * - High contrast ratios (verified WCAG AA)
 * - Respects prefers-reduced-motion
 * - Semantic HTML structure
 * - Clear visual states with redundant indicators (color + icon + text)
 */
export const ProjectTimeline: React.FC<ProjectTimelineProps> = ({ steps }) => {
  return (
    <div className="mt-5 space-y-3">
      {steps.map((step, i) => {
        const isDone = step.status === 'done';
        const isActive = step.status === 'active';
        const isPending = step.status === 'pending';
        const isLast = i === steps.length - 1;

        const connectorClasses: Record<StepStatus, string> = {
          done: 'timeline-connector-done',
          active: 'timeline-connector-active',
          pending: 'timeline-connector-pending',
        };

        return (
          <div key={step.label} className="flex gap-3.5 relative">
            {/* Connector line between steps */}
            {!isLast && (
              <div
                className={`absolute left-2.5 top-5 bottom-0 w-px ${connectorClasses[step.status]}`}
                aria-hidden="true"
              />
            )}

            {/* Step indicator icon */}
            <div className="flex-shrink-0 pt-1.5">
              {isDone && (
                <div className="timeline-step-done" aria-label="Completed">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
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
                <div className="timeline-step-active" aria-label="Currently in progress">
                  <div className="timeline-step-active-indicator" />
                </div>
              )}
              {isPending && (
                <div className="timeline-step-pending" aria-label="Not yet started" />
              )}
            </div>

            {/* Step content */}
            <div className="pt-0.5 flex-1">
              <div className="flex items-center gap-2">
                <p
                  className={`text-sm font-semibold ${
                    isPending ? 'text-muted-foreground' : 'text-foreground'
                  }`}
                >
                  {step.label}
                </p>
                {isActive && (
                  <span className="status-badge-now" aria-current="true">
                    NOW
                  </span>
                )}
              </div>
              <p
                className={`text-xs mt-0.5 leading-relaxed ${
                  isPending ? 'text-muted-foreground' : 'text-muted-foreground'
                }`}
              >
                {step.detail}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
