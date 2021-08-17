interface CardProps {
 imagePath: string;
 name: string;
 title: string;
 affiliation: string;
 reverse?: boolean;
}

export default function MemberCard(props: CardProps) {
  return (
      <div className={`flex ${props.reverse ? "sm:flex-row-reverse" : "sm:flex-row "}`}>
        <figure className="md:flex bg-gray-100 rounded-xl shadow-md md:p-0 p-8 w-1/2">
          <img
              className="w-32 h-16 max-h-48 md:w-48 md:h-auto md:rounded-xl rounded-full mx-auto md:m-0 object-cover"
            src={`/profiles/${props.imagePath}`}
            alt=""
            width="384"
            height="512"
          />
          <div className="pt-6 md:p-8 md:text-left space-y-4 my-auto ml-4">
            <h1 className="text-3xl font-bold text-gray-900">{props.name}</h1>
            <figcaption className="font-medium">
              <div className="text-gray-700">
                  {props.title}
              </div>
              <div className="text-gray-500">{props.affiliation}</div>
            </figcaption>
          </div>
        </figure>
    </div>
  );
}

