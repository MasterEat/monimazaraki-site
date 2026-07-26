---
name: Sacred Silence
colors:
  surface: '#fff8f4'
  surface-dim: '#e2d8cf'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fcf2e8'
  surface-container: '#f6ece3'
  surface-container-high: '#f1e6dd'
  surface-container-highest: '#ebe1d7'
  on-surface: '#1f1b15'
  on-surface-variant: '#544342'
  inverse-surface: '#353029'
  inverse-on-surface: '#f9efe5'
  outline: '#877271'
  outline-variant: '#d9c1bf'
  surface-tint: '#954745'
  primary: '#511315'
  on-primary: '#ffffff'
  primary-container: '#6e2929'
  on-primary-container: '#f1918e'
  inverse-primary: '#ffb3b0'
  secondary: '#586245'
  on-secondary: '#ffffff'
  secondary-container: '#dce7c2'
  on-secondary-container: '#5e684b'
  tertiary: '#003023'
  on-tertiary: '#ffffff'
  tertiary-container: '#004936'
  on-tertiary-container: '#7ab79f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b0'
  on-primary-fixed: '#3d0508'
  on-primary-fixed-variant: '#77302f'
  secondary-fixed: '#dce7c2'
  secondary-fixed-dim: '#c0cba7'
  on-secondary-fixed: '#161e07'
  on-secondary-fixed-variant: '#414a2f'
  tertiary-fixed: '#b1f0d5'
  tertiary-fixed-dim: '#95d3ba'
  on-tertiary-fixed: '#002116'
  on-tertiary-fixed-variant: '#0d513d'
  background: '#fff8f4'
  on-background: '#1f1b15'
  surface-variant: '#ebe1d7'
  parchment: '#F5F0E6'
  limestone: '#E8DFD0'
  antique-gold: '#B59A62'
typography:
  headline-xl:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Source Serif 4
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Source Serif 4
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
  body-sm:
    fontFamily: Source Serif 4
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Source Sans 3
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Source Sans 3
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1140px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

The design system is built upon the concept of "Quiet Reverence." It seeks to evoke a sense of timelessness, peace, and human touch, reflecting the monastic life and the rugged, natural beauty of Boeotia. The brand personality is humble yet dignified, avoiding the trappings of modern commercialism in favor of an editorial, manuscript-inspired aesthetic.

The chosen design style is **Minimalism with Tactile influences**. We rely on heavy whitespace (breathing room), high-quality typography, and a palette derived from natural materials like aged parchment, limestone, and monastic pigments. The interface should feel like a well-crafted book or a quiet walk through a stone corridor—grounded, intentional, and spiritually focused.

## Colors

The palette is rooted in the organic tones of the monastery’s environment and history. 

- **Primary Burgundy (#6E2929):** A deep, Byzantine red used for primary actions, headings, and significant religious markers. It symbolizes life and the liturgical tradition.
- **Olive Green (#667052):** Used for secondary accents, connecting the digital space to the surrounding landscape of Boeotia.
- **Warm Ivory (#F5F0E6):** The primary surface color, providing a soft, eye-straining-free background that mimics handmade paper.
- **Natural Limestone (#E8DFD0):** Used for secondary surfaces, dividers, and subtle structural shifts.
- **Warm Dark Brown (#2F2A24):** Used for all primary text to ensure high legibility without the harshness of pure black.
- **Antique Gold (#B59A62):** Used very sparingly for highlights, such as iconography or small ornamental details, to signify sacredness without appearing ostentatious.

## Typography

The typography strategy emphasizes clarity and historical weight. 

**Headlines** utilize **Libre Caslon Text**, a refined serif that echoes the scholarly and liturgical nature of Byzantine manuscripts while maintaining excellent Greek character support. It should be used with generous leading and occasional negative letter-spacing for large titles.

**Body text** is set in **Source Serif 4**, a highly readable, humanist serif. It provides a warm, "bookish" feel that is comfortable for long-form reading of spiritual texts or monastery history.

**Labels and Metadata** use **Source Sans 3**, a neutral, clean humanist sans-serif. This is reserved for functional UI elements to provide a subtle modern contrast to the traditional serif fonts without feeling "corporate."

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain an editorial, manuscript-like composition. On mobile, it transitions to a fluid model with generous safe areas.

Spacing is rhythmic and spacious. We use an 8px base unit but favor larger gaps to create a sense of "sacred space" and prevent the UI from feeling cluttered or hurried.

- **Desktop:** 12-column grid with a 1140px max-width, centered.
- **Tablet:** 8-column grid with 32px side margins.
- **Mobile:** 4-column grid with 20px side margins. 

Vertical spacing between sections should be significant (e.g., 80px or 120px) to encourage a slow, meditative scrolling experience.

## Elevation & Depth

This design system rejects modern shadows and artificial depth. Instead, hierarchy is created through **Tonal Layers** and **Subtle Outlines**.

- **Surfaces:** Use the shift between Warm Ivory (primary) and Natural Limestone (secondary) to define different content areas. 
- **Outlines:** Use very thin (1px), low-opacity borders using the Dark Text color at 10-15% opacity. This mimics the ruled lines found in ancient manuscripts.
- **Depth:** No shadows are permitted. If an element must appear "raised" (like a modal), use a slightly darker background tint (Limestone) and a crisp 1px border.

## Shapes

Shapes are kept **Soft (0.25rem)**. This subtle rounding removes the aggressive sharpness of modern digital boxes, making the UI feel more organic and human-made, similar to the edges of hand-cut stone or weathered paper. Avoid perfect circles except for very specific religious icons or buttons where a "seal" metaphor is appropriate.

## Components

### Buttons
Buttons should be modest and text-heavy. The primary button is a "Burgundy Ghost" style: a thin 1px border in Deep Burgundy with serif text. The hover state should involve a subtle background fill of the same color at very low opacity (5-10%). No heavy fills or gradients.

### Cards
Cards are minimalist. They should not have shadows. Use a subtle background color shift to Natural Limestone or a very thin, light-brown border to define the container. Text should be centered or left-aligned with generous internal padding (min 32px).

### Input Fields
Fields are simple underlined entries or boxes with a 1px Limestone border. Focus states should transition the border color to Deep Burgundy.

### Navigation
The header should be transparent and spacious upon entry, using the Dark Text color for links. On scroll, it transitions to a solid Warm Ivory background with a slim profile and a very subtle bottom divider.

### Icons
Icons must be monoline and custom-drawn to feel like monastic symbols. Avoid standard "material" or "feather" icons. Use symbols like the cross, incense burners, or stylized floral motifs inspired by Byzantine architecture.

### Lists
Lists of spiritual readings or events should use "limestone" dividers and ample line-height to ensure the text remains the focus. Use the Olive Green color for small bullet points or date markers.