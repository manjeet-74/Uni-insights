import { Link } from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface FindCardProps {
    icon: IconDefinition ;
    heading: string;
    para: string;
}

export const FindCard = ({ icon, heading, para }: FindCardProps) => {
    return (
        <div className="mx-6 bg-white mt-16 mb-6 p-4 flex items-center">
            <FontAwesomeIcon icon={icon} className="mr-4 text-3xl" />
            <div>
                <h1 className="font-semibold mb-4">{heading}</h1>
                <p>{para}</p>
                <Link to="/#">Get Started </Link>
            </div>
        </div>
    )
}