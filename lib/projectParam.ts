const listeners = new Set<() => void>();

export function subscribeProjectParam(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("popstate", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("popstate", onChange);
  };
}

export function getProjectParam() {
  return new URLSearchParams(window.location.search).get("project");
}

export function setProjectParam(slug: string | null) {
  const url = new URL(window.location.href);
  if (slug) url.searchParams.set("project", slug);
  else url.searchParams.delete("project");
  window.history.replaceState(null, "", url);
  listeners.forEach((l) => l());
}
