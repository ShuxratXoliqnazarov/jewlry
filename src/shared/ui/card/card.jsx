export default function Card({ miniTitle, title, description }) {
  return (
    <div className="text-center">
      <h4 className="text-[14px]">{miniTitle}</h4>

      <h2 className="text-[42px] pt-[27px] pb-[35px]">
        {title}
      </h2>

      <p className="">
        {description}
      </p>
    </div>
  )
}