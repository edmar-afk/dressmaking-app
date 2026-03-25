import tapeImg from "../images/tools/tape.png";
import rulerImg from "../images/tools/ruler.png";
import frenchImg from "../images/tools/french.jpg";
import lShapeImg from "../images/tools/lShape.jpg";
import notebookImg from "../images/tools/notebook.png";
import chalkpencilImg from "../images/tools/chalkpencil.jpg";
import gaugeImg from "../images/tools/gauge.jpg";
import yardImg from "../images/tools/yard.jpg";

const tools = [
  {
    id: 1,
    name: "Tape Measure",
    image: tapeImg,

    description:
      "A flexible measuring tool made from cloth, plastic, or metal, designed to accurately measure lengths and circumferences. It is widely used in tailoring, sewing, construction, and DIY projects where precise measurements are important.",
    uses: "Used to measure lengths, widths, heights, and body dimensions. Essential for sewing garments, measuring furniture, or determining material requirements in construction.",
    handling:
      "Hold the tape flat against the surface or body to ensure accurate readings. Avoid twisting, bending, or overstretching the tape as this can affect precision.",
    tips: "Retract the tape slowly to prevent snapping or damage. Keep it clean and dry, and store it rolled up or in its case to maintain its shape and accuracy.",
  },
  {
    id: 2,
    name: "Ruler",
    image: rulerImg,

    description:
      "A straight, rigid measuring tool made of wood, plastic, or metal. It is used to draw straight lines, measure short distances, and ensure accuracy in both artistic and technical work.",
    uses: "Ideal for drawing precise lines, measuring objects up to its length, checking alignment, and assisting in pattern-making or design sketches.",
    handling:
      "Place the ruler flat on the surface, ensuring it does not wobble. Avoid bending or applying excessive force to maintain its straightness and measurement accuracy.",
    tips: "Store flat or upright to prevent warping. Keep free from scratches and clean regularly to maintain legibility of markings.",
  },
  {
    id: 3,
    name: "French Curve",
    image: frenchImg,

    description:
      "A set of curved templates made of plastic or metal used for drawing smooth, precise curves. It is especially useful for shapes that are difficult to create with a compass or freehand drawing.",
    uses: "Used in fashion design, pattern making, and technical drawings to create armholes, necklines, or other curved shapes accurately.",
    handling:
      "Align the curve carefully along the desired path, and draw lightly to avoid slipping. Do not apply excessive force to prevent breakage or deformation.",
    tips: "Clean with a soft cloth after use to remove any markings. Store flat or in a protective sleeve to prevent chipping or losing the curve shape.",
  },
  {
    id: 4,
    name: "L-square",
    image: lShapeImg,

    description:
      "A right-angled measuring tool shaped like the letter 'L', commonly used for drawing and verifying 90-degree angles. It is essential in drafting, pattern making, woodworking, and construction.",
    uses: "Helps in drawing perpendicular lines, checking square corners, and ensuring accuracy in patterns, furniture making, or technical projects.",
    handling:
      "Hold firmly against the surface when drawing lines or checking angles. Avoid dropping or hitting it against hard surfaces to preserve its precision.",
    tips: "Wipe clean after each use to remove dust or chalk. Store hanging or flat to prevent bending or warping over time.",
  },
  {
    id: 5,
    name: "Chalk/Pencil",
    image: chalkpencilImg,

    description:
      "Marking tools used to temporarily make lines or notes on various surfaces such as fabric, wood, or paper. Chalk and pencils allow for adjustments before final cutting or drafting.",
    uses: "Used for marking measurements, drawing patterns, making design notes, or guiding cutting processes without leaving permanent marks.",
    handling:
      "Apply light, even pressure when marking to avoid deep indentations. Use gentle strokes to ensure marks can be erased or washed out if needed.",
    tips: "Store chalk in a protective box to prevent breakage. Keep pencils sharpened and in a case to prevent damage and ensure clear, precise markings.",
  },
  {
    id: 6,
    name: "Notebook/Measurement Chart",
    image: notebookImg,
    video: null,
    description:
      "A notebook or chart for recording measurements, observations, and project details. It helps in organizing information and serves as a reference for future work.",
    uses: "Used to document body measurements, project dimensions, design specifications, and any important notes to ensure consistency and accuracy.",
    handling:
      "Write clearly and neatly to maintain legibility. Avoid tearing pages or spilling liquids on the notebook to keep the data safe and organized.",
    tips: "Store in a clean, dry place to prevent damage from moisture. Use bookmarks or tabs to quickly locate important information, and update it regularly to keep records current.",
  },
  {
    id: 7,
    name: "Yard Stick ",
    image: yardImg,
    video: null,
    description:
      "A long, straight measuring tool typically 36 inches (1 yard) in length, made of wood, metal, or plastic. It is commonly used for measuring larger lengths and drawing long straight lines.",
    uses: "Used for measuring longer distances, drafting patterns, marking fabric, and ensuring straight lines in sewing and construction projects.",
    handling:
      "Place the yardstick flat on the surface and align it carefully before measuring or drawing. Avoid bending or dropping it to maintain accuracy.",
    tips: "Store flat or hang it to prevent warping. Keep markings clean and visible, and avoid exposing it to moisture if made of wood.",
  },
  {
    id: 8,
    name: "Sewing Gauge",
    image: gaugeImg,
    video: null,
    description:
      "A small measuring tool with a sliding marker, used for measuring short distances accurately. It is commonly made of metal or plastic and is essential in detailed sewing work.",
    uses: "Used for measuring hems, seam allowances, pleats, buttonholes, and other small, precise measurements in garment construction.",
    handling:
      "Adjust the slider carefully to the desired measurement and hold it firmly while marking. Ensure the tool is flat against the fabric for accuracy.",
    tips: "Keep the slider clean and moving smoothly. Store in a safe place to avoid bending or losing the small parts.",
  },
];

export default tools;
