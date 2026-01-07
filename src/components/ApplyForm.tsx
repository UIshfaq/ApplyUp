import { PropsWithChildren, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppliances } from "../contexts/AppliancesContext";

type Job = {
  id: "front" | "back";
  title: string;
};

const JOBS: Job[] = [
  { id: "front", title: "Développeur Frontend" },
  { id: "back", title: "Développeur Backend" },
];

export const ApplyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState<Job["id"]>("front");
  const [des, setDes] = useState("");

  const navigate = useNavigate();

  const { addAppliance } = useAppliances();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addAppliance({
            id: Date.now().toString(),
            name,
            phoneNumber: "",
            job,
            description: des,
          });
          navigate("/list");
        }}
        className="flex flex-col gap-4"
      >
        <Row label="Nom">
          <input
            name="name"
            required
            type="text"
            placeholder="Votre nom"
            className="input"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Row>
        {!name && <p className="text-red-500">Le nom est requis</p>}
        <input
          name="email"
          type="email"
          required
          placeholder="Votre email"
          className="input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <select
          defaultValue="front"
          className="select"
          value={job}
          onChange={(e) => setJob(e.target.value as Job["id"])}
        >
          {JOBS.map((job) => (
            <option key={job.id} value={job.id}>
              {job.title}
            </option>
          ))}
        </select>
        <textarea className="textarea"
                  placeholder="Description"
                    value={des}
                    onChange={(e) => setDes(e.target.value)}
        ></textarea>
        <button className="btn btn-success" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
};

type RowProps = {
  label: string;
};

const Row = ({ label, children }: PropsWithChildren<RowProps>) => {
  return (
    <div className="flex flex-row gap-4">
      <span>{label}</span>
      {children}
    </div>
  );
};
