import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { type } from "os";
import {TWilder } from '../types';

type FormSubmissionInfo = {
  status: 'success' | 'failure';
  message: string
} | null

const createWilder = async (name: string, city: string) => {
  const response = await axios.post("/api/wilders", { name, city });
  return response.data.result;
};

const useCreateWilderForm = (onSuccess: (wilder: TWilder) => void):[string, (name: string) => void, string, (name: string) => void, boolean, FormSubmissionInfo, () => Promise<void>] => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [formSubmissionInfo, setFormSubmissionInfo] = useState<FormSubmissionInfo>(null);

  const updateName = (name: string) => {
    setFormSubmissionInfo(null);
    setName(name);
  };

  const updateCity = (city: string) => {
    setFormSubmissionInfo(null);
    setCity(city);
  };

  const submitForm = async (): Promise<void> => {
    setLoading(true);
    try {
      const newWilder = await createWilder(name, city);
      setName("");
      setCity("");
      setFormSubmissionInfo({
        status: "success",
        message: "Wilder created successfully.",
      });
      onSuccess(newWilder);
    } catch (error) {
      setFormSubmissionInfo({
        status: "failure",
        message: "Could not create wilder.",
      });
    } finally {
      setLoading(false);
    }
  };

  return [
    name,
    updateName,
    city,
    updateCity,
    loading,
    formSubmissionInfo,
    submitForm,
  ];
};

type CreateWilderFormProps = {
  onSuccess: (wilder: TWilder) => void
}

const CreateWilderForm = ({ onSuccess }: CreateWilderFormProps): JSX.Element => {
  const [
    name,
    updateName,
    city,
    updateCity,
    loading,
    formSubmissionInfo,
    submitForm,
  ] = useCreateWilderForm(onSuccess);

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        submitForm();
      }}
    >
      <label htmlFor="wilder-name">
        Name:{" "}
        <input
          id="wilder-name"
          type="text"
          name="wilder-name"
          value={name}
          autoFocus
          onChange={(event) => {
            updateName(event.target.value);
          }}
        />
      </label>
      <br />
      <label htmlFor="wilder-city">
        City:{" "}
        <input
          id="wilder-city"
          type="text"
          name="wilder-city"
          value={city}
          onChange={(event) => {
            updateCity(event.target.value);
          }}
        />
      </label>
      <br />
      <input type="submit" disabled={loading} />
      {loading && <Loader type="Puff" color="#000" height={25} width={25} />}
      {formSubmissionInfo && <span>{formSubmissionInfo.message}</span>}
    </form>
  );
};

export default CreateWilderForm;
