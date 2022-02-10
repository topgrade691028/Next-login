import { noop } from '../../../core/types';

interface Props {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: any) => void;
}

export function Input({ id, name, type, label, placeholder, value, onChange }: Props) {
  return (<div className="rounded-md pt-10 pb-5 border border-light-75 shadow mb-20">
    <label className="w-full text-10 text-primary-100 font-medium px-15 inline-block">
      {label}
      <input
        id={id || name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className="w-full text-12 leading-7 focus:outline-none bg-transparent text-white"
        onChange={onChange}
      />
    </label>
  </div>);
}

Input.defaultProps = {
  id: '',
  type: 'text',
  label: '',
  value: '',
  placeholder: '',
  onChange: noop,
};
