# Doc Automation Agent Playbook

## Objective
- Explore the outstanding SDK functions listed in `functions-to-explore.md`
- Capture ground-truth responses for every read/network call without mutating the project
- Feed the captured results into `giraffe_docs/new_docs.md` so the reference stays ahead of `giraffe_docs/current_docs.md`
- Maintain a running roster of ⚠ mutation-prone functions to tackle manually at the end

## Reference Material
- `docs-condensed.md` - canonical SDK behavior reference
- `functions-to-explore.md` - backlog of unverified calls grouped by module
- `src/automation/functionCatalog.js` - button IDs, access types, and metadata for each catalogued call
- `prompts/buttonResults.md` - historical outputs from prior manual runs
- `giraffe_docs/current_docs.md` - legacy documentation for comparison
- `giraffe_docs/new_docs.md` - working draft that must be updated

## Deliverables
- Updated sections in `giraffe_docs/new_docs.md` for every safe function that returns data
- A markdown snapshot of the automation run saved to `giraffe_docs/runs/<timestamp>-safe.md`
- A bullet list of ⚠ functions (function signature + short rationale) appended near the bottom of `giraffe_docs/new_docs.md`
- No changes to project state inside Giraffe; all risky calls stay deferred

## Safety Rules
- Treat anything that creates, updates, deletes, activates, toggles, enables, disables, sets, fits, flies, or otherwise implies mutation as ⚠
- Cross-check the `access` field in `functionCatalog.js`; if it is `mutation`, add the function to the ⚠ roster instead of running it
- If a call needs parameters that would write data, skip execution and document expected behavior from existing references
- Do not remove content from `new_docs.md`; append or refine sections in place

## Workflow
1. **Prepare the run**
   - Launch the iframe app inside Giraffe, switch to the Automation tab, and ensure the project is in a known-safe sandbox state
   - Open the following files side-by-side: `functions-to-explore.md`, `functionCatalog.js`, `giraffe_docs/new_docs.md`
2. **Build your queue**
   - From `functions-to-explore.md`, list every function whose `access` in the catalog is `read` or `network`
   - Mark anything ambiguous or missing from the catalog as ⚠ pending a human decision
3. **Capture safe outputs**
   - Click `Run Safe (Read/Network) Functions` in the Automation panel to execute every ready-made safe call
   - For calls that are not wired to the safe runner (no `buttonId` or require parameters), trigger them individually via the UI buttons or directly through `rpc.invoke`/`giraffeState.get` in the browser console
   - After each execution, copy the JSON payload from the corresponding output pane or the automation log
   - Paste each payload into a local scratch file, then consolidate all results into `giraffe_docs/runs/<YYYYMMDD-HHMM>-safe.md` using the markdown emitted in the Automation "Documentation Preview" textarea
4. **Document the findings**
   - For every safe function just executed, add or refine a section in `giraffe_docs/new_docs.md` that explains:
     - What the function does and when to call it
     - The critical parts of the returned structure (include tables or bullet highlights instead of raw dumps)
     - Any caveats observed while testing (empty arrays, null responses, permission errors, etc.)
   - Reference `docs-condensed.md` and `current_docs.md` to keep terminology aligned
5. **Track ⚠ functions**
   - Build a dedicated `### ⚠ Deferred Functions` section near the bottom of `giraffe_docs/new_docs.md`
   - Add bullet entries in the form `- ⚠ functionName(args) - reason skipped (e.g., "mutates layers", "requires destructive toggle")`
   - Do not execute these calls; rely on existing docs or comments to describe expected behavior as far as possible without side effects
6. **Wrap up**
   - Ensure `giraffe_docs/new_docs.md` stays well-structured (headings for modules, consistent ordering with `functions-to-explore.md`)
   - Verify the new markdown snapshot exists under `giraffe_docs/runs/`
   - Leave `functions-to-explore.md` untouched unless explicitly instructed otherwise

## Reporting Checklist
- Safe run markdown saved with timestamp under `giraffe_docs/runs/`
- `giraffe_docs/new_docs.md` contains updated write-ups for every safe call executed
- ⚠ section lists every skipped function with rationale
- No project data mutated during the process
- Note any calls that still need parameters or sample payloads so a human can follow up
- Edit the checklist of functions in `functions-to-explore.md` to keep track of where we are in the docs.
