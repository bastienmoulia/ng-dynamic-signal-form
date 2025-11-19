import { Component, effect, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  isDarkMode = signal(false);

  constructor() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode.set(true);
    } else if (savedTheme === null) {
      // Check system preference if no saved preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode.set(prefersDark);
    }

    // Apply theme on initialization and whenever it changes
    effect(() => {
      const isDark = this.isDarkMode();
      document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }

  toggleTheme() {
    this.isDarkMode.update((value) => !value);
  }
}
