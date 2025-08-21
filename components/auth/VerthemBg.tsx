import Image from "next/image";

export default function VerthemBG() {
  return (
    <div
      className="hidden bg-muted lg:block lg:min-h-screen"
      style={{
        backgroundImage: `url('/images/login-bg.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="h-10 px-4 py-2 absolute right-4 top-4 md:right-8 md:top-8">
        <Image
          alt="verthem logo"
          src={"/images/verthem-logo.svg"}
          width={144}
          height={26}
        />
      </div>
      <div className="flex justify-center p-12 h-full flex-col">
        <div className="grow flex items-center">
          <Image
            className="mx-auto"
            alt="verthem app"
            src={"/images/verthem-app.png"}
            width={826.5}
            height={502.5}
          />
        </div>
        <div className="max-w-[827px] mx-auto">
          <h2 className="mt-10 scroll-m-20 text-3xl font-semibold first:mt-0 text-white">
            Craft campaigns that convert
          </h2>
          <p className="ext-base [&:not(:first-child)]:mt-6 text-white">
            Our intuitive interface and versatile features ensure that your
            campaigns are not only visually appealing but also highly effective,
            helping you achieve your marketing goals with ease!
          </p>
        </div>
      </div>
    </div>
  );
}
