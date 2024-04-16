function Banner({ status, children }) {
  return <div className={`${status} Banner`}>{children}</div>;
}

export default Banner;
