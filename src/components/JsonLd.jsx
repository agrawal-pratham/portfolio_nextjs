/**
 * Renders a JSON-LD <script> block.
 * Accepts either a single schema object or an array of schemas (wrapped in @graph).
 *
 * @param {Object} props
 * @param {Object|Object[]} props.data - JSON-LD schema object(s)
 */
export default function JsonLd({ data }) {
  const schema = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : { "@context": "https://schema.org", ...data };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
