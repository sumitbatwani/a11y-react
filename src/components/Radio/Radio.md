- The radio buttons are contained in or owned by an element with role **radiogroup**.

- Each radio button element has role **radio**.

- If a radio button is checked, the radio element has **aria-checked** set to true. If it 
is not checked, it has **aria-checked** set to false.

- Each radio element is labelled by its content, has a visible label referenced by **aria-labelledby**, or has a label specified with aria-label.

- The radiogroup element has a visible label referenced by **aria-labelledby** or has a label specified with **aria-label**.

- If elements providing additional information about either the radio group or each radio button are present, those elements are referenced by the radiogroup element or radio elements with the **aria-describedby** property.