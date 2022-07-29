import PropTypes from "prop-types";
// import { Field, Form, Formik } from "formik";
import s from "./Filter.module.scss";

const Filter = ({ options = [], filter, handleChange, form }) => {
  return (
    <ul className={s.filter}>
      {options.map(({ id, title }) => (
        <li className={s.item} key={id}>
          <input
            className={s.input}
            name="filter"
            value={id} // apple | zte | ...
            type="checkbox"
            id={id}
            checked={form.filter[id]} // apple -> false| zte | ...
            onChange={handleChange}
          />
          <label className={s.label} htmlFor={id}>
            {title}
          </label>
        </li>
      ))}
    </ul>
    // <Formik
    //   initialValues={{
    //     date: "2022-07-29",
    //     descr: "",
    //     filter: [],
    //   }}
    //   onSubmit={(values) => {
    //     console.log("values :>> ", values);
    //   }}
    // >
    //   {(props) => (
    //     <Form>
    //       <Field type="date" name={"date"} />
    //       <Field type="text" name={"descr"} />
    //       <ul className={s.filter}>
    //         {options.map(({ id, title }) => (
    //           <li className={s.item} key={id}>
    //             <Field
    //               className={s.input}
    //               name="filter-1"
    //               type="checkbox"
    //               id={id}
    //               value={id}
    //             />
    //             <label className={s.label} htmlFor={id}>
    //               {title}
    //             </label>
    //           </li>
    //         ))}
    //       </ul>
    //       <button type="submit">Ok</button>
    //     </Form>
    //   )}
    // </Formik>
  );
};

Filter.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

export default Filter;
