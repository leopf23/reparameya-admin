import type { ReactNode } from "react";

export interface PageHeaderProps {
  title: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function PageHeader({ title, icon, action, className = "" }: PageHeaderProps) {
  return (
    <div className={`flex flex-wrap items-center justify-between gap-4 ${className}`}>
      <div className="flex items-center gap-3 min-w-0">
        {icon && (
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
            {icon}
          </span>
        )}
        <h1 className="font-semibold text-gray-900 text-xl sm:text-2xl truncate">
          {title}
        </h1>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
