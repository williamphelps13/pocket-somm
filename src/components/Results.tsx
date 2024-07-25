import { ResultsProps } from "../types";

const Results = ({ filteredVarietals }: ResultsProps) => (
  <section className="flex flex-col items-center space-y-4">
    <h2 className="text-2xl underline underline-offset-8">
      Varietals that Match
    </h2>
    {filteredVarietals.length ? (
      <ul className="flex flex-wrap">
        {filteredVarietals.map((varietal) => (
          <li
            className="m-2 rounded-lg border border-neutral-200 p-2"
            key={varietal.name}
          >
            {varietal.name}
          </li>
        ))}
      </ul>
    ) : (
      <div className="flex flex-col space-y-4 text-center">
        <h3 className="text-lg text-neutral-500">
          Apologies, none of these varietals match this combo.
        </h3>
        <p className="text-sm text-neutral-500">
          <strong>Tip:</strong> Some notes like <em>No minerality</em> exclude
          quite a few varietals. Try tweaking these.
        </p>
      </div>
    )}
  </section>
);

export default Results;
