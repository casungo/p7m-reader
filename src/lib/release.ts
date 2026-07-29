export function currentRelease(changelog: string, version: string, now = new Date()) {
  const escapedVersion = version.replaceAll(".", "\\.");
  const match = changelog.match(
    new RegExp(`^## ${escapedVersion} - (\\d{4}-\\d{2}-\\d{2})\\n\\n((?:- .+\\n?)+)`, "m"),
  );

  if (!match) throw new Error(`CHANGELOG.md non contiene la versione ${version}`);

  const age = now.getTime() - new Date(`${match[1]}T00:00:00Z`).getTime();
  return {
    version,
    date: new Intl.DateTimeFormat("it-IT", { dateStyle: "long", timeZone: "UTC" }).format(
      new Date(`${match[1]}T00:00:00Z`),
    ),
    isNew: age >= 0 && age < 14 * 86400000,
    changes: match[2].trim().split("\n").map((line) => line.slice(2)),
  };
}
