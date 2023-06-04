import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center">
      <Image
        className="rounded-full object-cover"
        width={50}
        height={50}
        src="https://madanbajgai.com.np/madmax.avif"
        alt="Logo"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
