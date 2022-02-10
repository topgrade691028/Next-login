import { noop } from '../../../core/types';

interface Props {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: any) => void;
  rows: number;
}

export function TextArea({ id, name, label, placeholder, value, onChange, rows }: Props) {
  return (<div className="rounded-md pt-10 pb-5 py-0 border border-light-75 shadow mb-20">
    <label className="w-full text-10 text-light-500 font-medium px-15 inline-block">
      {label}
      <textarea
        id={id || name}
        name={name}
        placeholder={placeholder}
        value={value}
        className="w-full text-12 leading-7 focus:outline-none"
        onChange={onChange}
        rows={rows}
      />
    </label>
  </div>);
}

TextArea.defaultProps = {
  id: '',
  label: '',
  value: '',
  placeholder: '',
  onChange: noop,
  rows: 3,
};
