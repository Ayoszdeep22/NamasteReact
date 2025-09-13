import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  const title = "Oops — something went wrong";
  const message =
    error?.statusText ||
    error?.message ||
    "We couldn't load what you were looking for in the FoodApp. Try again or go back to the menu.";
  const code = error?.status || error?.code || "UNKNOWN";

  const url = typeof window !== "undefined" ? window.location.href : "unknown";

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily:
          'Inter, Roboto, -apple-system, "Segoe UI", system-ui, sans-serif',
        color: "#F3F4F6",
        background: "linear-gradient(180deg,#0f172a 0%, #071024 100%)",
      }}
    >
      <div
        style={{
          width: "min(920px, 94%)",
          borderRadius: 12,
          padding: "1.75rem",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
          boxShadow: "0 6px 30px rgba(2,6,23,0.6)",
          border: "1px solid rgba(255,255,255,0.04)",
        }}
        role="alert"
      >
        <div
          style={{
            minWidth: 88,
            minHeight: 88,
            borderRadius: 10,
            display: "grid",
            placeItems: "center",
            background: "linear-gradient(135deg,#f97316 0%, #fb923c 100%)",
          }}
          aria-hidden
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 3c.6 0 1 .4 1 1v7.5a3.5 3.5 0 11-2-3.1V4c0-.6.4-1 1-1z"
              fill="#fff"
              opacity="0.95"
            />
            <path
              d="M17 3c.6 0 1 .4 1 1v7.5a3.5 3.5 0 11-2-3.1V4c0-.6.4-1 1-1z"
              fill="#fff"
              opacity="0.95"
            />
          </svg>
        </div>

        <div style={{ flex: 1 }}>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#fff" }}>
            {title}
          </h1>
          <p style={{ margin: "8px 0", color: "#c7ccd1" }}>{message}</p>
          <div style={{ color: "#94a3b8", fontSize: 13 }}>Error: {code}</div>
          <div style={{ marginTop: 8, color: "#94a3b8", fontSize: 13 }}>
            Request URL: {url}
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
            <button
              style={{
                padding: "9px 14px",
                borderRadius: 8,
                fontWeight: 600,
                background: "#10b981",
                color: "#042017",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => navigate(0)}
              aria-label="Retry"
            >
              Retry
            </button>

            <button
              style={{
                padding: "9px 14px",
                borderRadius: 8,
                fontWeight: 600,
                background: "transparent",
                color: "#e6eef0",
                border: "1px solid rgba(255,255,255,0.06)",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
              aria-label="Go to menu"
            >
              Go to Menu
            </button>

            <a
              href="mailto:support@foodapp.example"
              style={{
                padding: "9px 14px",
                borderRadius: 8,
                fontWeight: 600,
                background: "transparent",
                color: "#e6eef0",
                border: "1px solid rgba(255,255,255,0.06)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Contact Support
            </a>
          </div>

          <div style={{ marginTop: 12 }}>
            <small style={{ color: "#94a3b8", fontSize: 13 }}>
              If this keeps happening while ordering, please contact support and
              include the URL above.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
