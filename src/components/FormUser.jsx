import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/FormUser.css";

export const FormUser = ({
  createUser,
  userSelected,
  updateUser,
  setUserSelected,
  formIsOpen,
  setFormIsOpen,
}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    if (userSelected) {
      updateUser(userSelected.id, data);
      setUserSelected();
    } else {
      createUser(data);
    }
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
    setFormIsOpen(false);
  };

  useEffect(() => {
    reset(userSelected);
  }, [userSelected]);

  const handleExit = () => {
    setFormIsOpen(false);
    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
    setUserSelected();
  };
  return (
    <div className={`form-container ${formIsOpen || "form__close"}`}>
      <form onSubmit={handleSubmit(submit)} className="form">
        <span className="form__exit" onClick={handleExit}>
          <i className="bx bx-x"></i>
        </span>
        <h2 className="form__title">
          {userSelected ? "Register Form" : "Create new user"}
        </h2>
        <div className="form__list">
          <label className="form__field">
            <span className="form__label">Email</span>
            <input
              type="email"
              {...register("email")}
              className="form__input"
            />
            {/* {...register('email', {
              minLength: {
                value: 8,
                message: 'Debe tener un mínimo de caracteres'
            } })}
            <h3>{errors.email?.message}</h3>
            */}
          </label>
          <label className="form__field">
            <span className="form__label">Password</span>
            <input
              type="password"
              {...register("password")}
              className="form__input"
            />
          </label>
          <label className="form__field">
            <span className="form__label">First Name</span>
            <input
              type="text"
              {...register("first_name")}
              className="form__input"
            />
          </label>
          <label className="form__field">
            <span className="form__label">Last Name</span>
            <input
              type="text"
              {...register("last_name")}
              className="form__input"
            />
          </label>
          <label className="form__field">
            <span className="form__label">Birthday</span>
            <input
              type="date"
              {...register("birthday")}
              className="form__input"
            />
          </label>
        </div>
        <button className="form__btn">Submit</button>
      </form>
    </div>
  );
};
