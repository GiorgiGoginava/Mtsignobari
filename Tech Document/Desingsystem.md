# MTSIGNOBARI — DIGITAL EDITORIAL DESIGN SYSTEM

Brand Mtsignobari (მწიგნობარი)  
Product Georgian-inspired digital publishing and reading platform  
Design direction Quiet editorial minimalism, contemporary literary culture, premium digital publishing  
Primary reference Medium × Substack × NYT Books, with a distinctive Georgian literary identity  
Canvas Desktop-first editorial website, responsive mobile adaptation  
Visual output High-fidelity UIUX design board with page wireframe, component specimens, palette, typography, and interaction states

---

## 01. BRAND IDENTITY & VISUAL DIRECTION

Create a refined, minimalist literary platform that feels like a contemporary Georgian journal printed on beautiful archival paper.

The interface must be calm, spacious, highly legible, intelligent, and trustworthy. Use typography, alignment, fine rules, and carefully controlled color as the primary design elements.

### Brand personality
- Literary and intellectually curious.
- Minimalist, not sterile.
- Georgian-inspired without excessive decorative folklore.
- Contemporary, but not aggressively technological.
- Premium, editorial, and welcoming.

### Logo
Use the existing Mtsignobari logo featuring a flying bird integrated with a fountain-pen nib, enclosed within a circular emblem, with the curved MTSIGNOBARI wordmark.

- Preserve the original logo geometry and proportions.
- Primary logo color Deep Indigo `#1E2245`.
- Preferred background Warm Paper `#F9F8F3` or white.
- Header logo icon approximately 40–48 px.
- Do not recreate the logo with a generic feather or bird icon.
- Use the supplied SVG asset when implementing the actual website.

### Visual rules
- Generous whitespace.
- Left-aligned editorial headlines.
- Thin neutral dividers.
- Restrained gold accents.
- Minimal shadows.
- No excessive gradients, glassmorphism, oversized rounded cards, or dashboard-like visual clutter.
- Avoid stock imagery unless it contributes directly to editorial storytelling.

---

## 02. COLOR DESIGN SYSTEM

Use these colors consistently across the entire interface.

 Token  Hex  Application 
---------
 Primary Indigo  `#1E2245`  Logo, headings, primary buttons, active navigation 
 Indigo Hover  `#30365F`  Hover and pressed states 
 Soft Gold  `#D4AF37`  Fine dividers, active indicators, decorative accents 
 Warm Paper  `#F9F8F3`  Main reading surface 
 Dark Charcoal  `#222222`  Article body and primary text 
 Slate Grey  `#6C757D`  Metadata, timestamps, secondary labels 
 White  `#FFFFFF`  Forms and selected cards 
 Paper Border  `#E7E3D9`  Borders and separators 
 Muted Paper  `#F0EEE6`  Hover surfaces and secondary panels 
 Sepia Surface  `#F1E7D0`  Alternative reading theme 
 Dark Reading Surface  `#222222`  Dark reading mode 
 Dark Reading Text  `#F9F8F3`  Text in dark reading mode 

### Color distribution

- 60% warm paper and neutral backgrounds.
- 25% white surfaces and open whitespace.
- 10% indigo typography and interface elements.
- 5% gold details.

Gold must never dominate the layout. Do not use gold for small text on warm paper unless sufficient contrast is verified.

---

## 03. TYPOGRAPHY SYSTEM

### Editorial typography
Use a Georgian-capable serif family such as Noto Serif Georgian for article titles, editorial headlines, section titles, and long-form reading.

Playfair Display may be used as a complementary Latin display font, but it must not replace a font that correctly supports Georgian glyphs.

### Interface typography
Use Inter for Latin interface text and Noto Sans Georgian for Georgian labels and navigation.

### Type scale

 Role  Desktop  Mobile  Weight 
------------
 Hero headline  48–60 px  36–42 px  Semibold 
 Article title  40–48 px  32–36 px  Semibold 
 Section heading  28–32 px  24–28 px  Semibold 
 Card heading  18–22 px  18–20 px  Medium 
 Article body  19–21 px  18–20 px  Regular 
 Navigation  14–16 px  14–16 px  Medium 
 Metadata  12–14 px  12–14 px  Regular 
 Small labels  11–12 px  11–12 px  Medium 

### Article typography rules
- Maximum text width 68ch.
- Body line height 1.85.
- Paragraph spacing 1.4em.
- Section-heading top margin approximately 2.2em.
- Comfortable paragraph lengths and clear separation between headings and body copy.
- Use italics sparingly for quotations and literary emphasis.

---

## 04. SPACING, GRID & SURFACES

### Spacing scale

4 px base unit.

- 4 px icon alignment.
- 8 px compact control spacing.
- 12 px metadata gaps.
- 16 px standard form and card spacing.
- 24 px internal component spacing.
- 32 px content-group separation.
- 48 px section separation.
- 64 px major page spacing.
- 96 px large editorial breaks.

### Desktop grid
- Maximum overall content width 1280 px.
- Header height 80 px.
- Main content top spacing 40–48 px.
- Main grid approximately 2.21 reading-column-to-sidebar ratio.
- Reading column 680–760 px.
- Sidebar 280–320 px.
- Column gap 40–56 px.
- Page gutters 32–48 px on large screens.
- Card radius 10–12 px.
- Input and button radius 8 px.
- Borders 1 px solid `#E7E3D9`.

### Responsive behavior
- Desktop, 1280 px and wider two-column editorial layout.
- Tablet, 768–1279 px narrower reading column and reduced sidebar width; sidebar may move below the article.
- Mobile, below 768 px one-column layout, compact header, full-width reading utilities.
- Small mobile, below 400 px stacked utility controls and full-width buttons.

---

## 05. FULL PAGE LAYOUT WIREFRAME

Create a vertically organized editorial homepage containing the following sections in this exact order

1. Header and navigation.
2. Announcement strip.
3. Editorial introduction or featured-story heading.
4. Main two-column content grid.
5. Article header and metadata.
6. Reading utility toolbar.
7. Local document upload and preview zone.
8. Article body.
9. Sidebar introduction, categories, and quick donation.
10. Full donation section.
11. Contact and feedback form.
12. Footer.

The article remains the visual focal point. Donation and contact elements must not interrupt the primary reading experience.

---

## 06. HEADER & NAVIGATION

### Composition
A slim horizontal header on a warm-paper background, separated from the page by a fine neutral border.

Left Original bird-and-quill logo and Mtsignobari wordmark.

Centerright Home, Archive, About.

Far right Deep-indigo Donate button.

### Styling
- Height 80 px desktop, 64–72 px mobile.
- Logo 40–48 px.
- Wordmark 20–24 px.
- Navigation spacing 28–32 px.
- CTA padding 20 px horizontal, 10–12 px vertical.
- CTA background `#1E2245`.
- CTA text white.
- Gold active indicator 2 px underline or fine bottom rule.
- Background `#F9F8F3`.
- Bottom border `#E7E3D9`.

### Mobile state
Display the logo on the left and an accessible menu toggle on the right. Expand navigation through a compact dropdown or slide-over. Include Escape-key handling, visible focus, and correct expanded-state semantics.

### Tailwind reference
`sticky top-0 z-50 border-b border-[#E7E3D9] bg-[#F9F8F3]95`

---

## 07. ANNOUNCEMENT & EDITORIAL INTRODUCTION

### Announcement strip
A short, unobtrusive horizontal strip beneath the header.

Example label “FROM THE EDITORS”

Example message “Discover our latest essays on Georgian literature and cultural memory.”

- Background `#F0EEE6`.
- Height approximately 44–52 px.
- Text 13–14 px.
- Link underline Soft Gold.
- Optional small editorial icon.
- No large illustrations or animated banners.

### Editorial introduction
A restrained headline and short introductory sentence.

Headline example “Stories worth returning to.”

Supporting text “Essays, history, and ideas preserved for thoughtful readers.”

- Serif headline.
- Deep-indigo text.
- Maximum text width 700 px.
- Vertical padding 32–48 px.
- Optional small “Explore the archive” text link with arrow icon.

Keep the introduction compact when a featured article is already displayed immediately below.

---

## 08. MAIN ARTICLE HEADER

### Layout hierarchy
1. Category label.
2. Article headline.
3. Optional subtitle.
4. Author metadata.
5. Publication date and reading-time estimate.
6. Bookmark and share controls.

### Visual styling
- Category label 11–12 px uppercase sans-serif with subtle letter spacing.
- Article title 40–48 px serif, deep indigo.
- Subtitle 16–18 px, slate grey.
- Author name 14 px medium.
- Metadata 12–14 px slate grey.
- Fine gold rule below the title or metadata where appropriate.

Example headline

“The Written Word and the Memory of a Nation”

Example metadata

“By Author Name · October 20, 2026 · 8 min read”

These are sample editorial contents, not fixed publication data.

Do not enclose the entire article header inside a heavy card. It should sit naturally on the paper background.

---

## 09. INTERACTIVE READING TOOLBAR

Position the toolbar directly below the article metadata, separated by fine horizontal rules.

### Left group Font-size controls
- Accessible decrease button A−.
- Current font size indicator.
- Accessible increase button A+.
- Allowed range 16–24 px.
- Increment 1 px.

### Right group Reading themes
- Light.
- Sepia.
- Dark.

### Theme tokens
Light
- Background `#F9F8F3`.
- Text `#222222`.

Sepia
- Background `#F1E7D0`.
- Text dark brown.

Dark
- Background `#222222`.
- Text `#F9F8F3`.

### Interaction requirements
- Selected theme has a clear visual state.
- Controls update the actual article immediately.
- Use `aria-pressed` or equivalent accessible selection semantics.
- Preserve contrast and visible keyboard focus.
- Optional persist reading preferences locally.
- Apply themes to the article reading surface, not automatically to every page section.

### Appearance
Minimal outline buttons, compact spacing, no oversized toolbar background, no heavy shadows.

---

## 10. LOCAL DOCUMENT UPLOAD & VIEWER

### Purpose
Allow users to read local `.txt`, `.html`, and `.htm` documents directly in their browser.

### Default upload-zone design
- Width full reading column.
- Border 1 px dashed Soft Gold.
- Background transparent or white.
- Radius 12 px.
- Padding 32–40 px.
- Centered file-upload icon.
- Heading “Bring your own text”.
- Description “Drag a document here or browse files on your device.”
- Supported-format badges TXT, HTML, HTM.
- Visible “Choose file” button.
- Small privacy note “Preview documents locally on your device.”

### Interaction states
1. Idle dashed border and upload guidance.
2. Drag over highlighted indigo border and muted-paper background.
3. Loading filename and parsing indicator.
4. Success rendered document preview with filename and replaceremove controls.
5. Error accessible error message with retry action.
6. Empty file clear explanation and option to select another document.

### Functional requirements
- Support drag-and-drop and ordinary file selection.
- Use the browser File API.
- Set a reasonable file-size limit, such as 5 MB.
- Never insert raw user-provided HTML directly into the DOM.
- Sanitize HTML before displaying it or extract and display its text.
- Do not send local document contents to remote services by default.
- Provide a keyboard-accessible file-selection button.

---

## 11. ARTICLE BODY & READING SURFACE

### Appearance
The article body should be the quietest and most legible part of the interface.

- Background `#F9F8F3`.
- Text `#222222`.
- Font Georgian-capable serif.
- Desktop text width 65–75ch.
- Body size 19–21 px desktop, 18–20 px mobile.
- Line height 1.8–1.9.
- Paragraph bottom margin approximately 1.4em.
- H2 top margin approximately 2.2em.
- H3 top margin approximately 1.7em.
- Links indigo with a clear underline or hover state.
- Blockquotes 2–3 px gold left border, increased indentation, serif emphasis.
- Lists comfortable vertical spacing and standard markers.
- Images restrained, editorially relevant, and responsive.

### Reading behavior
- Preserve semantic article structure.
- Support long text without horizontal overflow.
- Maintain clear separation between sections.
- Avoid justified text if it creates uneven word spacing.
- Provide comfortable keyboard navigation and text selection.
- Ensure uploaded documents use the same reading-width constraints and theme settings.

---

## 12. RIGHT SIDEBAR

The sidebar contains three separate modules, each with subtle borders or generous whitespace.

### A. Platform introduction card
- Icon or small author portrait.
- Heading “About Mtsignobari”.
- One short paragraph explaining the platform.
- Text link “Learn about the project →”.
- White background.
- 24 px internal padding.

### B. Category navigation
Vertical category list

- Essays.
- History.
- Opinion.
- Archives.

Each category includes
- Left-aligned category name.
- Optional dynamic item count on the right.
- Subtle hover background.
- Indigo active text and thin gold indicator.

Category counts must come from real publication data.

### C. Quick donation card
- Deep-indigo background.
- Gold heart or book icon.
- White heading “Keep the words alive.”
- Short supporting text.
- Gold or white donation CTA with sufficient text contrast.
- 24 px internal padding.

### Sidebar behavior
- Desktop sticky placement below the header when appropriate.
- Tablet narrower sidebar or modules beneath the article.
- Mobile move modules below the main reading content.
- Keep sidebar content visually secondary to the article.

---

## 13. DONATION SECTION

### Heading
“Support independent writing”

Supporting text “Your contribution helps preserve written work and keep the platform accessible.”

### Currency selector
Three equal-width tabs

- GEL ₾.
- USD $.
- EUR €.

Active tab deep-indigo background with white text.

Inactive tabs white or paper background with subtle neutral border.

Currency changes update the displayed symbol and suggested amounts. Do not silently convert amounts using an unverified exchange rate.

### Suggested contribution cards
Four compact selectable cards per currency.

Illustrative presets
- GEL ₾10, ₾25, ₾50, ₾100.
- USD $5, $10, $25, $50.
- EUR €5, €10, €25, €50.

Include an optional custom-amount field.

Selected card
- Indigo border.
- Muted-paper background.
- Indigo amount text.

### Payment-method options
1. Bank card.
2. Bank transfer.

Use simple outlined payment cards with appropriate icons, clear descriptions, and a visible selected state.

### Bank-transfer details
Display a compact details panel containing
- Verified account holder.
- Verified IBAN.
- Bank name.
- SWIFTBIC, if required.
- Transfer reference and instructions.

Never use invented IBANs or unverified financial details.

### Payment security
- Integrate a supported payment provider.
- Never collect or store raw card data in the website's own form.
- Validate donation amount and currency on the backend.
- Verify payment status server-side.
- Include loading, success, pending, failure, and cancellation states.
- Provide clear refund, privacy, and donation terms.

The illustrated payment interface is a design prototype, not a functioning payment processor.

---

## 14. CONTACT & FEEDBACK FORM

### Section heading
“Let's start a conversation.”

Supporting text “Send a question, suggest an article, or share feedback about the platform.”

### Form layout
Desktop two-column field arrangement where appropriate.

Mobile single-column fields.

### Fields
1. Full name — required.
2. Email address — required.
3. Subject dropdown — required.
4. Message textarea — required.
5. Submit button.

Subject options
- General inquiry.
- Editorial submission.
- Technical issue.
- Donation question.
- Feedback or suggestion.

### Form styling
- White input surfaces.
- Border `#E7E3D9`.
- Radius 8 px.
- Height 44–48 px.
- Label 14 px medium sans-serif.
- Input text 15–16 px.
- Field spacing 16–20 px.
- Focus ring visible indigo.
- Error state clear message, accessible announcement, and error styling.
- Success state concise confirmation message.

Use proper labels, keyboard accessibility, client-side validation, server-side validation, and spam protection. A real backend or form service is required to deliver submissions.

---

## 15. FOOTER

### Appearance
A full-width deep-indigo footer that visually closes the editorial experience.

### Layout
Left
- Logo.
- Mtsignobari wordmark.
- Short brand statement.

Right
- Explore links.
- Contact and information links.
- Social media icons.

Bottom
- Copyright.
- Privacy policy.
- Donation terms.

### Styling
- Background `#1E2245`.
- Primary text `#F9F8F3`.
- Secondary text muted light neutral.
- Gold section labels and subtle dividers.
- Desktop horizontal or two-column layout.
- Mobile vertically stacked sections.
- Top padding 48–64 px.
- Bottom padding 24–32 px.

Social icons must have accessible names and real destinations. Do not use decorative icons as nonfunctional links.

---

## 16. COMPONENT LIBRARY

Create reusable components for

- `SiteHeader`
- `MobileNavigation`
- `AnnouncementBanner`
- `EditorialIntroduction`
- `ArticleHeader`
- `ReadingToolbar`
- `ThemeToggle`
- `FontSizeControl`
- `LocalDocumentViewer`
- `ArticleContent`
- `SidebarAbout`
- `CategoryNavigation`
- `QuickDonationCard`
- `DonationForm`
- `CurrencySelector`
- `PaymentMethodCard`
- `ContactForm`
- `FormField`
- `SiteFooter`

Each component should have
- Default state.
- Hover state.
- Focus state.
- Active or selected state, where applicable.
- Disabled state, where applicable.
- Loading, success, and error states for asynchronous operations.

---

## 17. TAILWIND CSS DESIGN TOKENS

Recommended core classes

Page container
`mx-auto w-full max-w-[1280px] px-4 smpx-6 lgpx-8`

Primary button
`rounded-lg bg-[#1E2245] px-5 py-3 text-white hoverbg-[#30365F]`

Secondary button
`rounded-lg border border-[#E7E3D9] px-5 py-3 text-[#1E2245] hoverbg-[#F0EEE6]`

Form input
`w-full rounded-lg border border-[#E7E3D9] bg-white px-4 py-3 text-[#222222] focus-visibleoutline-none focus-visiblering-2 focus-visiblering-[#1E2245]`

Editorial card
`rounded-xl border border-[#E7E3D9] bg-white p-6`

Metadata
`font-sans text-sm text-[#6C757D]`

Reading surface
`bg-[#F9F8F3] text-[#222222]`

Article body
`mx-auto max-w-[68ch] font-serif text-[19px] leading-[1.85]`

Section heading
`font-serif text-3xl font-semibold text-[#1E2245]`

Subtle divider
`border-t border-[#E7E3D9]`

These classes are implementation references. Ensure the actual font configuration supports Georgian and that all interactive states are implemented.

---

## 18. ACCESSIBILITY & QUALITY ASSURANCE

Before release, verify

- Semantic HTML and logical heading hierarchy.
- Keyboard navigation for all controls.
- Visible focus indicators.
- Sufficient color contrast across all reading themes.
- Accessible names for icon-only buttons.
- Reduced-motion support.
- Mobile responsiveness and text reflow.
- Safe handling of uploaded HTML.
- No accidental transmission of local file contents.
- Server-side validation for donations and contact submissions.
- Verified bank-transfer details.
- Correct loading, empty, success, and error states.
- No horizontal scrolling in article content at narrow screen widths.

---

## 19. FINAL VISUAL DESIGN SUMMARY

The final website should resemble a premium independent literary journal rather than a conventional SaaS dashboard.

Primary visual impression warm paper, deep-indigo identity, elegant Georgian typography, generous whitespace.

Primary focal point the article title and reading surface.

Secondary elements compact metadata, restrained reading controls, editorial sidebar.

Supporting sections donation, contact, and footer, all sharing the same typography and design tokens.

Signature details original bird-and-quill emblem, subtle gold rules, literary serif headlines, and a calm reading environment.

The result should be minimalist, polished, responsive, accessible, and immediately recognizable as Mtsignobari.

Image-generation direction when translating this specification into a design-system image, prioritize a large desktop homepage mockup with the header, announcement, two-column reading layout, article toolbar, upload zone, sidebar modules, and a lower strip of component specimens showing the palette, typography, buttons, donation selector, and contact fields. Use a clean white presentation canvas around the warm-paper interface, with crisp vector-like details and legible UI labels.