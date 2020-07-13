import React from "react";
import "./App.css";
// ini form
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gaji: "",
      jk: "",
      tgl: "",
      alamat: "",
      skill: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onPick = this.onPick.bind(this);
    this.onJK = this.onJK.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const { name, gaji, jk, tgl, alamat, skill } = this.state;
    alert(
      `Namaku adalah ${name}, saya ${jk}. Gajiku adalah ${gaji}, sudah kerja sejak ${tgl} skill saya adalah ${skill} saya tinggal di ${alamat}`
    );
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onPick(event) {
    let skill = [...this.state.skill];
    let idx = skill.findIndex(elemen => event.target.value === elemen);
    if (idx > 0) {
      skill = [...skill.slice(0, idx), ...skill.slice(idx + 1, skill.length)];
    } else {
      skill.push(event.target.value);
    }
    this.setState({ skill });
  }

  onJK(event) {
    this.setState({
      jk: event.target.value
    });
  }

  render() {
    const { name, gaji, tgl, jk, skill, alamat } = this.state;
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <label>
            Nama:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.onChange}
            />
            <br />
          </label>

          <label>
            Gaji:
            <input
              type="number"
              name="gaji"
              value={gaji}
              onChange={this.onChange}
            />
            <br />
          </label>

          <label>
            Tanggal Masuk:
            <input
              type="date"
              name="tgl"
              value={tgl}
              onChange={this.onChange}
            />
            <br />
          </label>

          <label>
            Jenis Kelamin:
            <input
              type="radio"
              name="gender"
              checked={jk === "male"}
              value="male"
              onChange={this.onJK}
            />
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              checked={jk === "female"}
              value="female"
              onChange={this.onJK}
            />
            <label>Female</label>
            <br />
          </label>

          <label>
            Skills:
            <select
              name="skills"
              multiple={true}
              value={skill}
              onChange={this.onPick}
            >
              <option value="CSS">CSS</option>
              <option value="React">React</option>
              <option value="PHP">PHP</option>
              <option value="Python">Python</option>
            </select>
          </label>
          <br />

          <label>
            Alamat:
            <textarea name="alamat" value={alamat} onChange={this.onChange} />
            <br />
          </label>

          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default Form;

