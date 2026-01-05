
# 🏛 Project Architecture - Nümtema Dashboard

This document serves as a guide for any AI Agent or developer working on this codebase.

## 📂 File Structure
- `App.tsx`: Central hub for state management (active tabs, sidebar collapse).
- `theme.ts`: **MODIFY THIS FIRST** for visual changes (colors, borders, spacing).
- `components/`: UI molecules and organisms.
  - `Sidebar.tsx`: Navigation logic and sub-menus.
  - `Navbar.tsx`: Breadcrumbs and top actions.
- `views/`: Page-level components.
  - `DashboardView.tsx`: Main stats page.
  - `CreateCollectionView.tsx`: Form-heavy page.
  - `SettingsView.tsx`: Menu-style configuration page.

## 🎨 Design Rules
1. **Consistency**: Always use values from `theme.ts`. Avoid hardcoding hex colors.
2. **Typography**: The primary font is **'Outfit'** (imported in `index.html`).
3. **Icons**: Use `lucide-react` for all iconography.

## 🚀 How to Add a New Page
1. Create a new file in `components/` (e.g., `ProfileView.tsx`).
2. Add the new `id` to the `menuItems` array in `Sidebar.tsx`.
3. Update the `renderContent` switch in `App.tsx` to include your new view.
4. Update the breadcrumb logic in `Navbar.tsx`.

## 🛠 AI Instructions
- To change the **Primary Color**: Go to `theme.ts` -> `colors.primary`.
- To change **Sidebar Width**: Go to `theme.ts` -> `spacing.sidebarWidth`.
- To change **Rounded Corners**: Go to `theme.ts` -> `spacing.borderRadius`.
