import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { actualTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(actualTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9 rounded-full transition-all duration-200 hover:bg-muted"
      aria-label="Toggle theme"
    >
      {actualTheme === 'light' ? (
        <Moon className="h-4 w-4 text-foreground-secondary hover:text-foreground transition-colors" />
      ) : (
        <Sun className="h-4 w-4 text-foreground-secondary hover:text-foreground transition-colors" />
      )}
    </Button>
  );
}