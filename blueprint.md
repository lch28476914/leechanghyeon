
# Blueprint: Lotto Number Generator

## Overview

This is a web application that generates random lottery numbers. It provides a simple and visually appealing interface for users to get their lucky numbers.

## Project Outline

### Current Version: Lotto Generator
*   **Purpose**: To generate and display random lottery numbers.
*   **Features**:
    *   A "Lotto Ticket" web component (`<lotto-ticket>`).
    *   Generates 6 unique random numbers between 1 and 45.
    *   Displays the numbers in a visually appealing ticket format.
    *   A "Generate" button to trigger the number generation.
*   **Design & Style**:
    *   **Layout**: Centered card-based UI.
    *   **Colors**: Modern color palette using `oklch`.
    *   **Fonts**: Clean and readable fonts.
    *   **Effects**: Subtle shadows and glows for a premium feel.
    *   **Component-based**: Uses a Web Component to encapsulate the UI and logic.

## Current Plan

*   **Goal**: Create a Lotto Number Generator from scratch.
*   **Steps**:
    1.  **Create `index.html`**:
        *   Set up the basic HTML structure.
        *   Include a `<lotto-ticket>` custom element.
    2.  **Create `style.css`**:
        *   Add global styles for background, fonts, and layout.
    3.  **Create `main.js`**:
        *   Create and define the `LottoTicket` custom element.
        *   Implement the logic for generating and displaying 6 unique random numbers from 1 to 45.
        *   Encapsulate the component's HTML and CSS using the Shadow DOM.
