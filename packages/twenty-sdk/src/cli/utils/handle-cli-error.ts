import chalk from 'chalk';
import { CommanderError } from 'commander';

export const handleCliError = (error: unknown) => {
  if (error instanceof CommanderError) {
    process.exit(error.exitCode);
  }
  if (error instanceof Error) {
    console.error(chalk.red('Error:'), error.message);
    process.exit(1);
  }
};
