function Message(props) {
  const base = "message";
  const { message } = props;
  return (
    <div className={`${base}__root`}>
      <div className={`${base}__container`}>
        <h2 className={`${base}__container message`}>{message}</h2>
      </div>
    </div>
  );
}

export default Message;
