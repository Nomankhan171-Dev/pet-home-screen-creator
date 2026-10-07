<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Keep the pet-care home experience in the index route, with in-page navigation and service detail dialogs; this keeps the requested home-only scope without implying an operational booking service.
- Define visual treatments through semantic global CSS tokens and use the shared Button for actions; this keeps the pet-care presentation consistent.
