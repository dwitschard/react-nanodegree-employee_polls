import { useSearchParams } from "react-router-dom";

const NotFoundPage = () => {
  const [params, _] = useSearchParams();
  const detailText = params.get("reason");

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="text-9xl uppercase text-primary">404</div>
        <div className="pl-5 text-3xl text-secondary">
          {detailText || "Page not Found"}
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
