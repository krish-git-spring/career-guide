import { useState } from 'react';

const activities = [
  // DAY 1
  {
    id: 1, day: 1, emoji: '🌈', title: 'Paint a Rainbow', type: 'Canvas',
    materials: ['Canvas or thick paper', 'Watercolors or poster colors', 'Paintbrushes', 'Water cup'],
    steps: ['Draw a big rainbow arc with a pencil first', 'Paint each stripe a different color — red, orange, yellow, green, blue, purple', 'Add fluffy white clouds at both ends', 'Let it dry and show your masterpiece!'],
    tip: 'Start with the outermost color (red) and work inward so colors do not mix!'
  },
  {
    id: 2, day: 1, emoji: '🦋', title: 'Fingerprint Butterflies', type: 'Paper',
    materials: ['White paper', 'Ink pad or paint', 'Markers', 'Googly eyes (optional)'],
    steps: ['Press your thumb into paint and stamp two wing shapes', 'Add smaller fingerprints for the body and antennae', 'Draw a face and patterns on the wings with markers', 'Make a whole garden of butterflies!'],
    tip: 'Use two different colors for each wing to make it extra pretty!'
  },
  {
    id: 3, day: 1, emoji: '🍃', title: 'Leaf Rubbing Art', type: 'Paper',
    materials: ['Fresh leaves', 'Thin paper', 'Crayons with paper peeled off', 'Tape'],
    steps: ['Place a leaf under the paper and tape the corners', 'Hold a crayon flat and rub over the leaf', 'Watch the leaf shape appear!', 'Make a whole tree with different leaf rubbings'],
    tip: 'Try rubbing over multiple leaves at once for a forest scene!'
  },
  {
    id: 4, day: 1, emoji: '🫧', title: 'Bubble Wrap Printing', type: 'Canvas',
    materials: ['Bubble wrap', 'Paint', 'Paper or canvas', 'A paintbrush'],
    steps: ['Paint the bubble wrap side with bright colors', 'Press it onto paper like a stamp', 'Peel it off to see the bubble pattern', 'Layer different colors to make abstract art'],
    tip: 'This is how real artists make texture — you are using a pro technique!'
  },
  // DAY 2
  {
    id: 5, day: 2, emoji: '🌸', title: 'Flower Stamping', type: 'Paper',
    materials: ['Real flowers or leaves', 'Paint', 'Paper', 'A rolling pin or spoon'],
    steps: ['Paint the flower or leaf on one side', 'Press it onto paper like a stamp', 'Lift carefully to see the print', 'Fill the page with a flower garden pattern'],
    tip: 'Try different flowers — roses, marigolds, and leaves all make different prints!'
  },
  {
    id: 6, day: 2, emoji: '🎨', title: 'Canvas Dot Painting', type: 'Canvas',
    materials: ['Small canvas', 'Acrylic or poster colors', 'Cotton buds or old toothbrushes', 'Paper plate palette'],
    steps: ['Pick a picture to copy — a mandala or animal', 'Dip a cotton bud in paint and make dots', 'Fill the whole canvas with dots of different colors', 'Step back and watch your dots turn into a picture!'],
    tip: 'Dots close together look like solid color — dots far apart look like stars!'
  },
  {
    id: 7, day: 2, emoji: '🖌️', title: 'Watercolor Resist Magic', type: 'Canvas',
    materials: ['Watercolor paper', 'White crayon or candle', 'Watercolors', 'Brush'],
    steps: ['Draw a picture with a white crayon first (it will be invisible!)', 'Paint over the whole paper with watercolors', 'Watch your hidden drawing appear as the paint avoids the crayon lines', 'Add more colors to make it pop'],
    tip: 'The crayon lines act like a shield — the paint cannot stick to them!'
  },
  {
    id: 8, day: 2, emoji: '⭐', title: 'String Painting', type: 'Canvas',
    materials: ['Canvas or thick paper', 'Yarn or string', 'Paint', 'Clothespins or tape'],
    steps: ['Stretch yarn across the canvas in a pattern', 'Tape or clip the ends down', 'Drip or brush paint over the yarn', 'Pull the yarn off to reveal painted lines'],
    tip: 'Try zigzag, spiral, or star patterns for different looks!'
  },
  // DAY 3
  {
    id: 9, day: 3, emoji: '🦁', title: 'Handprint Animals', type: 'Paper',
    materials: ['Paper', 'Paint', 'Markers', 'Googly eyes (optional)'],
    steps: ['Paint your hand and press it on paper', 'Turn the handprint into an animal — fingers become legs or ears', 'Add eyes, nose, and details with markers', 'Make a whole family of handprint animals!'],
    tip: 'A handprint lion: palm is the face, fingers are the mane!'
  },
  {
    id: 10, day: 3, emoji: '🌙', title: 'Night Sky Painting', type: 'Canvas',
    materials: ['Canvas or dark paper', 'Acrylic or poster colors', 'White paint or chalk', 'A brush or sponge'],
    steps: ['Paint the whole canvas dark blue or black', 'Use a sponge to dab lighter blue for stars', 'Paint a big yellow moon and a crescent', 'Add a sleeping animal silhouette at the bottom'],
    tip: 'Flick white paint with a toothbrush for tiny stars all over the sky!'
  },
  {
    id: 11, day: 3, emoji: '🧽', title: 'Sponge Art', type: 'Canvas',
    materials: ['Canvas or paper', 'Paint', 'A kitchen sponge', 'A plate for paint'],
    steps: ['Cut the sponge into shapes — circles, stars, or leave it whole', 'Dip each piece in a different color', 'Press and twist onto the canvas', 'Build a picture one stamp at a time'],
    tip: 'Twist the sponge while pressing for cool texture effects!'
  },
  {
    id: 12, day: 3, emoji: '🔮', title: 'Marble Roll Painting', type: 'Canvas',
    materials: ['Canvas in a shallow box', 'Paint', 'Marbles or small balls', 'Paper towel'],
    steps: ['Pour paint in lines across the canvas', 'Place marbles on top', 'Tilt the box so marbles roll through the paint', 'Lift the lid to reveal swirly marble art!'],
    tip: 'Use 2-3 colors only — too many makes brown mud!'
  },
  // DAY 4
  {
    id: 13, day: 4, emoji: '🧂', title: 'Salt Painting', type: 'Paper',
    materials: ['Watercolor paper', 'Watercolors', 'Table salt or sugar', 'Brush'],
    steps: ['Paint a shape with wet watercolors', 'Sprinkle salt over the wet paint', 'Watch the salt suck up the color and make crystals', 'Shake off extra salt when dry'],
    tip: 'The salt makes the color darker and sparkly — like frost!'
  },
  {
    id: 14, day: 4, emoji: '🧩', title: 'Sticker Mosaic', type: 'Paper',
    materials: ['Paper or cardboard', 'Old stickers or colored paper squares', 'Glue stick', 'Markers'],
    steps: ['Draw a big shape — heart, animal, or star', 'Cut colored paper into small squares', 'Glue the squares inside the shape like tiles', 'Add details with markers around the edge'],
    tip: 'Use one color family for a calm look, or rainbow for fun!'
  },
  {
    id: 15, day: 4, emoji: '🖍️', title: 'Chalk Pastel Art', type: 'Paper',
    materials: ['Black or dark paper', 'Oil pastels or chalk', 'A fixative spray (optional)', 'Your imagination'],
    steps: ['Pick a picture — an animal, space, or underwater scene', 'Layer colors lightly first, then press harder', 'Blend colors with your finger for smooth skies', 'Add white highlights last for sparkle'],
    tip: 'Dark paper makes colors POP — try it on black paper!'
  },
  {
    id: 16, day: 4, emoji: '☕', title: 'Coffee Stain Art', type: 'Paper',
    materials: ['White paper', 'Coffee or tea (cooled)', 'A cup or mug', 'Markers or crayons'],
    steps: ['Dip the bottom of a cup in coffee', 'Press it onto paper and lift — a ring appears!', 'Make rings of different sizes', 'Turn the rings into animals or planets with markers'],
    tip: 'Ask a grown-up to help with the hot drink — let it cool first!'
  },
  // DAY 5
  {
    id: 17, day: 5, emoji: '💨', title: 'Blow Paint Art', type: 'Canvas',
    materials: ['Canvas or paper', 'Liquid watercolors', 'Straws', 'Paper towel'],
    steps: ['Drop paint blobs on the paper', 'Blow through a straw to move the paint', 'Tilt the paper to guide the colors', 'Let it dry into wild swirls'],
    tip: 'Blow gently — hard blowing splatters paint everywhere!'
  },
  {
    id: 18, day: 5, emoji: '🔵', title: 'Q-tip Dot Mandala', type: 'Canvas',
    materials: ['Canvas or paper', 'Paint', 'Cotton buds (Q-tips)', 'A pencil for the center dot'],
    steps: ['Make a dot in the center with a pencil', 'Dip a Q-tip in paint and make a ring of dots around it', 'Add more rings, changing colors each time', 'Fill the outer rings to complete your mandala'],
    tip: 'Mandala means "circle" — every ring should be the same distance apart!'
  },
  {
    id: 19, day: 5, emoji: '🍂', title: 'Nature Collage', type: 'Paper',
    materials: ['Cardboard or thick paper', 'Glue stick', 'Leaves, petals, grass, small pebbles', 'Markers'],
    steps: ['Collect flat, dry nature items on a walk', 'Arrange them into a picture — a bird, tree, or face', 'Glue each piece down carefully', 'Add details with markers'],
    tip: 'Press flowers in a book for a day first to flatten them!'
  },
  {
    id: 20, day: 5, emoji: '🧶', title: 'Yarn Wrapped Canvas', type: 'Canvas',
    materials: ['Canvas or cardboard', 'Yarn in many colors', 'Scissors', 'Tape or glue'],
    steps: ['Draw a simple shape — heart, star, or fish', 'Tape the yarn end to the back', 'Wrap yarn around the canvas, following your shape', 'Change colors to fill different sections'],
    tip: 'Keep yarn tight but not stretched — it should lie flat!'
  },
  // DAY 6
  {
    id: 21, day: 6, emoji: '🪨', title: 'Painted Rocks', type: 'Canvas',
    materials: ['Smooth flat rocks', 'Acrylic or poster colors', 'Small brushes', 'A sealant spray (optional)'],
    steps: ['Wash and dry the rocks', 'Paint a base color all over', 'Add a cute face, animal, or pattern', 'Let dry and hide them around the garden for friends to find!'],
    tip: 'Draw the design with a pencil first so you can erase mistakes!'
  },
  {
    id: 22, day: 6, emoji: '☀️', title: 'Sun Prints', type: 'Paper',
    materials: ['Sunprint paper or blue paper', 'Small objects (leaves, toys, cutouts)', 'A sunny spot', 'Water to rinse'],
    steps: ['Place objects on the sunprint paper', 'Leave it in direct sunlight for 2-3 minutes', 'Rinse the paper in water', 'Watch the covered areas stay white — a silhouette appears!'],
    tip: 'The longer it sits in sun, the stronger the print!'
  },
  {
    id: 23, day: 6, emoji: '🧊', title: 'Ice Painting', type: 'Canvas',
    materials: ['Canvas or thick paper', 'Paint', 'Ice cube tray', 'Water and food coloring'],
    steps: ['Freeze water with a few drops of food coloring in each cube', 'Pop out the colored ice cubes', 'Slide them across the paper to paint', 'Watch the colors melt and blend!'],
    tip: 'Add a stick to each cube before freezing for easy holding!'
  },
  {
    id: 24, day: 6, emoji: '🎭', title: 'Paper Plate Mask', type: 'Paper',
    materials: ['Paper plate', 'Markers or paints', 'Yarn or string', 'Glue', 'Feathers or stickers (optional)'],
    steps: ['Cut two eye holes in the plate', 'Paint your mask — animal, superhero, or monster', 'Glue on feathers, stickers, or yarn hair', 'Tape string to the sides and wear it!'],
    tip: 'Look in the mirror while painting so the design faces the right way!'
  },
  // DAY 7
  {
    id: 25, day: 7, emoji: '📸', title: 'Paint Your Favorite Memory', type: 'Canvas',
    materials: ['Canvas', 'Acrylic or poster colors', 'Brushes', 'A photo of the memory (optional)'],
    steps: ['Think of a happy memory — a trip, a day at the beach, a festival', 'Sketch the main things you remember', 'Paint the background first, then the details', 'Add yourself or your family in the picture'],
    tip: 'Art is about feelings — there is no wrong way to paint a memory!'
  },
  {
    id: 26, day: 7, emoji: '👨‍👩‍👧', title: 'Family Portrait', type: 'Paper',
    materials: ['Large paper', 'Pencils and markers', 'A family photo', 'Crayons or paints'],
    steps: ['Look at a family photo together', 'Draw everyone — heads first, then bodies', 'Add clothes, hair, and their favorite things', 'Color it in and hang it on the wall!'],
    tip: 'Big heads and small bodies is the classic cartoon style — have fun!'
  },
  {
    id: 27, day: 7, emoji: '📖', title: 'Comic Strip', type: 'Paper',
    materials: ['Paper or notebook', 'Pencil', 'Eraser', 'Markers or crayons'],
    steps: ['Fold your paper into 4 boxes', 'Think of a tiny story: beginning, problem, fix, ending', 'Draw one picture in each box', 'Add speech bubbles with 1-2 words in each'],
    tip: 'Keep each box simple — one action per box is best!'
  },
  {
    id: 28, day: 7, emoji: '🎨', title: 'Free Paint Day', type: 'Canvas',
    materials: ['Canvas', 'All your paints', 'Brushes, sponges, anything that makes marks', 'Zero rules!'],
    steps: ['Squeeze out every color you have', 'Paint whatever feels good — no plan needed', 'Try new tools: fingers, leaves, bubble wrap', 'Sign your name big in the corner — it is YOUR art!'],
    tip: 'The best artists trust their instincts — just go for it!'
  },
  {
    id: 29, day: 7, emoji: '🏆', title: 'Art Gallery Show', type: 'Paper',
    materials: ['All your artwork from the week', 'String or tape', 'Paper for labels', 'Your family as audience'],
    steps: ['Pick your 5 favorite pieces from the week', 'Hang them on a wall like a real gallery', 'Write a tiny label for each one', 'Give a tour to your family — tell them about each piece!'],
    tip: 'Every artist is also a storyteller — talk about why you made each piece!'
  },
  {
    id: 30, day: 7, emoji: '🌟', title: 'Dream World Painting', type: 'Canvas',
    materials: ['Canvas', 'All your paints', 'Brushes', 'Your imagination!'],
    steps: ['Close your eyes and imagine your dream world', 'Sketch the big things first: ground, sky, favorite objects', 'Fill in colors and details — the more the merrier!', 'Show your picture and tell everyone about your world'],
    tip: 'There are no rules in dream worlds — flying whales are welcome!'
  }
];

const days = [
  { num: 1, title: 'Day 1 — First Strokes', emoji: '🌱' },
  { num: 2, title: 'Day 2 — Color Play', emoji: '🎨' },
  { num: 3, title: 'Day 3 — Texture Time', emoji: '🧽' },
  { num: 4, title: 'Day 4 — Mixed Media', emoji: '🧩' },
  { num: 5, title: 'Day 5 — Nature Art', emoji: '🍂' },
  { num: 6, title: 'Day 6 — Cool Techniques', emoji: '🧊' },
  { num: 7, title: 'Day 7 — Masterpiece Week', emoji: '🏆' }
];

export default function Activities({ profile }) {
  const [openId, setOpenId] = useState(null);
  const isAanvi = profile === 'aanvi';

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {isAanvi ? 'Art Activities for Aanvi! 🎨' : 'Art Activities'}
        </h1>
        <p className="text-gray-600">
          {isAanvi
            ? 'A whole week of drawing and painting fun — one activity a day on paper or canvas!'
            : 'A whole week of drawing and painting fun — one activity a day on paper or canvas'}
        </p>
      </div>

      {days.map((day) => {
        const dayActivities = activities.filter(a => a.day === day.num);
        return (
          <div key={day.num} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{day.emoji}</span>
              <h2 className="text-2xl font-bold text-gray-900">{day.title}</h2>
              <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-bold">
                {dayActivities.length} activities
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dayActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <button
                    onClick={() => setOpenId(openId === activity.id ? null : activity.id)}
                    className="w-full p-6 text-left"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-5xl">{activity.emoji}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        activity.type === 'Canvas'
                          ? 'bg-purple-100 text-purple-600'
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        {activity.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                    <p className="text-gray-500 text-sm font-medium">
                      {openId === activity.id ? 'Tap to hide steps ▲' : 'Tap to see how to do it ▼'}
                    </p>
                  </button>

                  {openId === activity.id && (
                    <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-gray-500 mb-2">What you need:</h4>
                        <div className="flex flex-wrap gap-2">
                          {activity.materials.map((m, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-gray-500 mb-2">Steps:</h4>
                        <ol className="space-y-2">
                          {activity.steps.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-xs font-bold mt-0.5">
                                {idx + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                      <div className="bg-yellow-50 rounded-xl p-3">
                        <p className="text-sm text-yellow-800 font-medium">
                          💡 <span className="font-bold">Tip:</span> {activity.tip}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
