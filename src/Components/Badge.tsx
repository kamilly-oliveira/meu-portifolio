type Props = {
  text: string;
};

export function Badge({ text }: Props) {
  return (
    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
      {text}
    </span>
  );
}
