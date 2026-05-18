---
name: theme-architect
description: Guides the creation and structured implementation of highly distinct, tactile, and mixed-materials design themes and layouts. Use when requesting new aesthetic themes, visual overhauls, or highly specific UI styling requests involving textures, materials, and distinct vibes.
---

# Theme Architect

Transforms complex aesthetic requests into actionable, high-fidelity design specifications and implementation plans.

## When to Use

- "Create a neo-brutalist theme"
- "I want layouts using mixed materials like papercraft, fabric, or textures"
- "Generate new color palettes and typography for a specific vibe"
- Visual identity overhauls requiring high specificity and tactile design implementation.

## Discovery and Analysis

1.  **Deconstruct the Request:** Break down the aesthetic prompt into specific visual components:
    *   **Core Vibe:** (e.g., neo-brutalist, papercraft, cyberpunk)
    *   **Tactility/Texture:** (e.g., stippled, paint splatter, denim, cardstock)
    *   **Color Profile:** (e.g., high-contrast primary colors, soft gradients, sepia)
    *   **Typography:** (What font pairs match the vibe?)
    *   **Layout/Structure:** (e.g., stark frames, overlapping collage, floating soft UI)

2.  **Define the Touchpoints:** Where will these themes apply? (Backgrounds, cards, typography, buttons, interactive states).

## Theme Implementation Framework

For each requested theme, define a structured specification:

### 1. Aesthetic Definition
*   **Name:** Distinctive name (e.g., `theme-neo-brutalist`, `theme-fabric-plaid`).
*   **Concept:** 1-2 sentence description of the vibe.

### 2. Design Tokens (CSS Variables)
Define the exact CSS variables needed for the theme.
*   `--background`, `--foreground`
*   `--card`, `--card-foreground`
*   `--primary`, `--primary-foreground`
*   `--border`, `--input`, `--ring`
*   *Crucially add custom variables for textures:* `--texture-overlay`, `--shadow-style`.

### 3. Typography & Styling Rules
*   **Fonts:** Specify Google Fonts imports.
*   **Borders & Shadows:** (e.g., 4px solid black borders for Neo-brutalism, soft multi-layered shadows for Neumorphism).
*   **Interactive States:** How do buttons behave on hover/active?

### 4. Asset Generation Prompts (Image/Pattern)
If the theme requires textures (fabric, paper), write specific prompts for image generation tools or CSS patterns.
*   *Example Prompt:* "Seamless high-fidelity macro photography texture of rough denim fabric with visible stitching, flat lighting, tileable."

## Output Format

Present the plan clearly to the user before implementation:

### 1. Theme Portfolio Summary
Briefly list the themes you will build based on their request.

### 2. Implementation Steps
1.  **CSS Foundation:** Add the `.theme-X` classes to the main stylesheet.
2.  **Asset Sourcing/Generation:** Generate or find the required textures/patterns.
3.  **Component Updates:** Modify UI components to support new theme-specific variables (e.g., adding a `before:content-['']` pseudo-element for noise overlays).
4.  **UI Integration:** Add theme toggles to the interface.

## Guidelines for Specific Aesthetics

*   **Neo-Brutalist:** High contrast, pure black borders (2px-4px), harsh shadows (e.g., `box-shadow: 4px 4px 0px 0px #000`), stark background colors (yellow, pink, cyan), monospaced or bold sans-serif fonts (Space Grotesk, Roboto Mono).
*   **Neumorphism:** Low contrast, background color matches element color, soft double shadows (one light, one dark) to create inset/extruded effects, rounded corners.
*   **Mixed Materials (Fabric/Paper):** Rely heavily on CSS `background-image` with repeating patterns, subtle drop shadows to create depth/layering (like overlapping paper), skeuomorphic touches (stitching lines via border-dashed).
