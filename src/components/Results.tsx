import { ResultsProps } from "../types";

const Results = ({ filteredVarietals }: ResultsProps) => (
  <section className="flex min-w-full flex-col items-center space-y-4">
    <h2 className="text-xl underline underline-offset-8 sm:text-2xl">
      Varietals that Match
    </h2>
    <dl className="mx-2 space-y-1 text-sm text-neutral-700">
      <div className="flex">
        <dt className="w-4 font-semibold">E</dt>
        <dd className="ml-4">
          Any wine region outside of Europe (USA, Chile, NZ, etc)
        </dd>
      </div>
      <div className="flex">
        <dt className="w-4 font-semibold">IE</dt>
        <dd className="ml-4">Inside of Europe (Spain, France, Italy, etc)</dd>
      </div>
    </dl>
    {filteredVarietals.length ? (
      <ul className="flex flex-col items-center sm:flex-row sm:flex-wrap">
        {filteredVarietals.map((varietal) => (
          <li className="m-2 rounded-lg sm:m-4" key={varietal.name}>
            {varietal.name}
          </li>
        ))}
      </ul>
    ) : (
      <div className="flex flex-col space-y-4 text-center">
        <h3 className="text-base text-neutral-500 sm:text-lg">
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
