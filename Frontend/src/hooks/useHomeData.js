import { useState, useEffect } from "react";
import { getCategories, getYears, getOscars } from "../../services/api.js";

export function useHomeData() {
  const [categories, setCategories] = useState([]);
  const [years, setYears] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        setLoading(true);
        setError("");
        const [categoriesData, yearsData] = await Promise.all([
          getCategories(),
          getYears(),
        ]);

        if (isMounted) {
          setCategories(categoriesData);
          setYears(yearsData);
        }
      } catch (err) {
        if (isMounted) {
          console.error(err);
          setError("Falha ao carregar dados iniciais.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  return { categories, years, loading, error };
}

export function useOscarData(year, categoryId) {
  const [oscar, setOscar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!year || !categoryId) {
      setOscar(null);
      return;
    }

    let isMounted = true;

    async function loadOscar() {
      try {
        setLoading(true);
        setError("");
        const data = await getOscars(year, categoryId);
        if (isMounted) setOscar(data);
      } catch (err) {
        if (isMounted) {
          console.error(err);
          setError("Não foi possível carregar os dados do Oscar.");
          setOscar(null);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadOscar();
    return () => {
      isMounted = false;
    };
  }, [year, categoryId]);

  return { oscar, loading, error };
}