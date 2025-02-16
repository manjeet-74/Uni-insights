export const Footer = () => {
    return (
        <div className="bg-slate-800 text-white flex 
        flex-col items-center justify-center py-6">
            <div className=" flex flex-col justify-center items-center gap-4">
                <h1>Subscribe to our newsletter</h1>
                <p>Get expert advice for your journey to university delivered to your inbox each month. It's short, and worthwhile – we promise!</p>
                <input type="email" placeholder="Email address" className="bg-white
                text-black px-6 py-4 w-1/2
                "/>
                <label>
                    <input
                        type="checkbox"
                        className="mr-4"
                    />
                    I confirm I am over 16 and I agree to the Terms and Conditions and Privacy Notice.
                </label>
                <button className="bg-gray-500 py-2 px-8">Subscribe</button>
            </div>
                <hr className="w-7/8 my-6"/>
        </div>
    )
}