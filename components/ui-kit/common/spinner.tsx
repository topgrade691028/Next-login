interface Props {
  isLoading: boolean;
}

export default function Spinner({ isLoading }: Props) {
  return (
    isLoading? (<div className="absolute left-0 top-0 w-full h-full bg-white bg-opacity-20 flex justify-center items-center z-20">
      <svg className="spinner animate-spin w-50 h-50" viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
      </svg>
    </div>) : (<></>)
  );
}
