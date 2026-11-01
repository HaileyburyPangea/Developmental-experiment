import assert from "node:assert/strict"
import test from "node:test"
import { studies } from "../src/studies.ts"

test("every reviewed entry supplies a usable protocol and evidence limitations", () => {
  const kinds = new Set(["experiment", "observation", "assessment", "framework"])
  for (const study of studies) {
    assert.ok(kinds.has(study.kind), study.name)
    for (const field of ["name", "experiment", "findings", "concept", "measure", "limitations"]) {
      assert.ok(typeof study[field] === "string" && study[field].trim(), `${study.name}: ${field}`)
    }
    for (const field of ["materials", "procedure"]) {
      assert.ok(Array.isArray(study[field]) && study[field].length, `${study.name}: ${field}`)
      assert.ok(study[field].every((item) => typeof item === "string" && item.trim()), study.name)
    }
    assert.ok(Array.isArray(study.references), study.name)
    for (const reference of study.references) {
      assert.ok(reference.title.trim(), study.name)
      assert.equal(new URL(reference.url).protocol, "https:", study.name)
    }
  }
})
