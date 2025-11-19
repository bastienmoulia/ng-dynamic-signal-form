# Accessibility Guide for ng-flex-form

This guide outlines accessibility best practices and ARIA patterns implemented in the `ng-flex-form` library.

## Overview

The library is designed with accessibility in mind, following WCAG 2.1 Level AA guidelines and using appropriate ARIA patterns for form controls and interactive elements.

## Form Field Components

### Basic Input Fields

All input field components (`NgffInputText`, `NgffInputEmail`, etc.) support standard HTML5 accessibility features:

- **Labels**: Use the `label` parameter to provide visible labels for all form fields
- **Required Fields**: Automatically display an asterisk (\*) for required fields
- **Placeholder Text**: Use `placeholder` for additional hints (not a replacement for labels)
- **Disabled State**: Use `disabled` parameter to mark fields as disabled
- **Readonly State**: Use `readonly` parameter for read-only fields

```typescript
params: NgffFormParams = {
  email: {
    type: NgffFieldType.InputEmail,
    label: 'Email Address', // Visible label
    placeholder: 'user@example.com', // Additional hint
  },
};
```

### Field IDs

Always provide unique `id` values for form fields to ensure proper label association:

```typescript
params: NgffFormParams = {
  email: {
    type: NgffFieldType.InputEmail,
    id: 'user-email', // Unique identifier
    label: 'Email Address',
  },
};
```

## Validation and Error Messages

### Field-Level Errors

The `NgffFieldErrors` component displays validation errors accessibly:

- Errors are announced to screen readers when they appear
- Errors are associated with their fields through ARIA
- Errors appear when fields are touched (configurable with `showWhen` parameter)

```typescript
// In your template
<ngff-input-text [field]="form.email" [params]="emailParams" />
<ngff-field-errors [field]="form.email" />
```

Configuration options:

```typescript
fieldErrorsParams: NgffFieldErrorsParams = {
  showWhen: 'touched', // 'touched', 'dirty', or 'always'
  className: 'custom-error-class',
};
```

### Form-Level Errors

The `NgffFormErrors` component provides a summary of all form validation errors:

- Useful at the top of forms for screen reader users
- Lists all field errors in one place
- Updates dynamically as form validity changes

```typescript
// In your template
<ngff-form-errors
  [form]="form"
  [params]="{ title: 'Please correct the following errors:' }"
/>
```

## Layout Components

### Field Groups

The `NgffFieldGroup` component uses semantic HTML (`<fieldset>` and `<legend>`) for accessible field grouping:

```typescript
<ngff-field-group [params]="{
  title: 'Personal Information',
  description: 'Enter your personal details below'
}">
  <ngff-input-text [field]="form.firstName" [params]="firstNameParams" />
  <ngff-input-text [field]="form.lastName" [params]="lastNameParams" />
</ngff-field-group>
```

Benefits:

- Screen readers announce the group title when entering/leaving the group
- Provides context for related fields
- Semantic HTML improves document structure

### Tabs

The `NgffTabs` and `NgffTabPanel` components implement the ARIA tabs pattern:

- Uses proper ARIA roles (`tablist`, `tab`, `tabpanel`)
- Manages focus appropriately
- Provides keyboard navigation (click-based for now, can be extended)
- Associates tabs with their panels using `aria-controls` and `aria-labelledby`

```typescript
tabsParams: NgffTabsParams = {
  tabs: [
    { id: 'personal', label: 'Personal Info' },
    { id: 'contact', label: 'Contact Details' },
  ],
};

<ngff-tabs [params]="tabsParams">
  <ngff-tab-panel [params]="{ tabId: 'personal', activeTabId: tabs.activeTab() }">
    <!-- Personal information fields -->
  </ngff-tab-panel>
  <ngff-tab-panel [params]="{ tabId: 'contact', activeTabId: tabs.activeTab() }">
    <!-- Contact fields -->
  </ngff-tab-panel>
</ngff-tabs>
```

## Best Practices

### 1. Always Provide Labels

Never rely solely on placeholders. Always use the `label` parameter:

```typescript
// ✅ Good
{ type: NgffFieldType.InputText, label: 'Full Name', placeholder: 'John Doe' }

// ❌ Bad
{ type: NgffFieldType.InputText, placeholder: 'Enter your name' }
```

### 2. Use Semantic Field Types

Choose the most appropriate field type for better accessibility:

```typescript
// Use specific input types
{
  type: NgffFieldType.InputEmail;
} // For email addresses
{
  type: NgffFieldType.InputTel;
} // For phone numbers
{
  type: NgffFieldType.InputUrl;
} // For URLs
{
  type: NgffFieldType.InputDate;
} // For dates
```

### 3. Provide Clear Error Messages

Error messages should be specific and actionable:

```typescript
// ✅ Good
required(p.email, { message: 'Email address is required' });
email(p.email, { message: 'Please enter a valid email address' });

// ❌ Bad
required(p.email, { message: 'Required' });
email(p.email, { message: 'Invalid' });
```

### 4. Group Related Fields

Use `NgffFieldGroup` to group related fields:

```typescript
<ngff-field-group [params]="{ title: 'Address Information' }">
  <ngff-input-text [field]="form.street" [params]="streetParams" />
  <ngff-input-text [field]="form.city" [params]="cityParams" />
  <ngff-input-text [field]="form.zipCode" [params]="zipParams" />
</ngff-field-group>
```

### 5. Maintain Logical Tab Order

Ensure fields appear in a logical order in the DOM. The default tab order follows the visual order.

### 6. Test with Keyboard Navigation

Ensure your forms can be completed using only the keyboard:

- Tab: Move between fields
- Shift+Tab: Move backwards
- Enter: Submit forms
- Space: Toggle checkboxes

### 7. Test with Screen Readers

Test your forms with popular screen readers:

- NVDA (Windows, free)
- JAWS (Windows)
- VoiceOver (macOS/iOS)
- TalkBack (Android)

## Color and Contrast

The default styles provide sufficient color contrast ratios:

- Error messages: Red text (#d32f2f) on white background (contrast ratio > 4.5:1)
- Active tab indicator: Blue (#1976d2) on white (contrast ratio > 4.5:1)

When customizing styles with `className`, ensure you maintain adequate contrast ratios:

- Normal text: At least 4.5:1
- Large text (18pt+ or 14pt+ bold): At least 3:1

## Dynamic Content

When form fields or validation errors change dynamically:

- Changes are automatically announced to screen readers
- Focus management is handled appropriately
- Error summaries update in real-time

## Select and Multi-Option Components

### Select Dropdowns

The `NgffSelect` component uses native `<select>` elements for maximum accessibility:

```typescript
{
  type: NgffFieldType.Select,
  label: 'Country',
  options: [
    { value: '', label: 'Select a country' },
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
  ],
}
```

### Radio Buttons

Use `NgffInputRadio` for mutually exclusive options:

```typescript
{
  type: NgffFieldType.InputRadio,
  label: 'Shipping Method',
  // Use with form group controls
}
```

### Checkboxes

Use `NgffInputCheckbox` for independent boolean options:

```typescript
{
  type: NgffFieldType.InputCheckbox,
  label: 'I agree to the terms and conditions',
}
```

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Form Accessibility](https://webaim.org/techniques/forms/)
- [Angular Accessibility Guide](https://angular.io/guide/accessibility)

## Testing Checklist

Use this checklist when implementing forms:

- [ ] All form fields have visible labels
- [ ] Required fields are clearly marked
- [ ] Error messages are clear and specific
- [ ] Form can be completed using only keyboard
- [ ] Color is not the only means of conveying information
- [ ] Sufficient color contrast for all text
- [ ] Logical tab order throughout the form
- [ ] Form validates and shows errors appropriately
- [ ] Success/error states are announced to screen readers
- [ ] Tested with at least one screen reader

## Contributing

When contributing new components to this library:

1. Follow semantic HTML practices
2. Use appropriate ARIA attributes when needed
3. Ensure keyboard accessibility
4. Test with screen readers
5. Document accessibility features in component README
6. Include accessibility tests in component specs

## Questions or Issues?

If you discover accessibility issues or have questions about implementing accessible forms, please open an issue on the GitHub repository.
