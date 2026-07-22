type SelectFieldProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

export default function SelectField({
  label,
  options,
  value,
  onChange,
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-slate-700 transition-colors dark:text-slate-300">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:border-blue-500 dark:focus:ring-blue-500/20"
      >
        <option
          value=""
          className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"
        >
          Select {label}
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}