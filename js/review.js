let reviews = []; // Stores all reviews
let displayedReviewsCount = 5; // Number of reviews initially displayed
const apiUrl = "https://rausnotes39-reviewsbackend.onrender.com/user/Getreview"; // API to fetch reviews

// Variables for review statistics
let NoOfReviews = 0;
let TotalRating = 0;
let NoOfOneRating = 0;
let NoOfTwoRating = 0;
let NoOfThreeRating = 0;
let NoOfFourRating = 0;
let NoOfFiveRating = 0;

// Fetch reviews from API
async function fetchReviews() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    reviews = data.Review.map((review) => ({
      name: review.name,
      photo: review.photo,
      comment: review.comment,
      rating: review.rating,
    }));

    // Update review statistics
    resetReviewStatistics();
    for (let i = 0; i < reviews.length; i++) {
      NoOfReviews++;
      TotalRating += reviews[i].rating;
      updateRatingCount(reviews[i].rating);
    }

    const avgRating = NoOfReviews > 0 ? TotalRating / NoOfReviews : 0;

    // Render average rating stars
    renderAverageRating(avgRating);

    // Display average rating and total reviews count
    smoothUpdateDigits("review_big_digit_data_1", avgRating.toFixed(2), 0.5);
    smoothUpdateDigits("totoal_of_reviews", NoOfReviews, 0.5);

    // Update progress bars for review ratings with smooth transition
    updateProgressBar("first_reivew_bar_hai_ye", NoOfOneRating / NoOfReviews);
    updateProgressBar("second_reivew_bar_hai_ye", NoOfTwoRating / NoOfReviews);
    updateProgressBar("third_reivew_bar_hai_ye", NoOfThreeRating / NoOfReviews);
    updateProgressBar("fourth_reivew_bar_hai_ye", NoOfFourRating / NoOfReviews);
    updateProgressBar("fifth_reivew_bar_hai_ye", NoOfFiveRating / NoOfReviews);

    // Render reviews with animation
    renderReviews();
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
}

// Reset review statistics
function resetReviewStatistics() {
  NoOfReviews = 0;
  TotalRating = 0;
  NoOfOneRating = 0;
  NoOfTwoRating = 0;
  NoOfThreeRating = 0;
  NoOfFourRating = 0;
  NoOfFiveRating = 0;
}

// Update the count for ratings
function updateRatingCount(rating) {
  if (rating === 1) NoOfOneRating++;
  if (rating === 2) NoOfTwoRating++;
  if (rating === 3) NoOfThreeRating++;
  if (rating === 4) NoOfFourRating++;
  if (rating === 5) NoOfFiveRating++;
}

// Smooth update of digits with animation
function smoothUpdateDigits(elementId, newValue, duration) {
  const element = document.getElementById(elementId);
  const currentValue = parseFloat(element.innerText) || 0;
  let startTime = null;

  function animate(time) {
    if (!startTime) startTime = time;
    const progress = Math.min((time - startTime) / (duration * 1000), 1);
    const value = currentValue + (newValue - currentValue) * progress;
    element.innerText = value.toFixed(2);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

// Smooth progress bar update with animation
function updateProgressBar(barId, percentage) {
  const progressBar = document.getElementById(barId);
  progressBar.style.transition = "width 0.5s ease"; // Add smooth transition
  progressBar.style.width = `${percentage * 100}%`;
}

// Render average rating stars with half-star logic
function renderAverageRating(avgRating) {
  const starsContainer = document.getElementById("stars");
  let stars = "";

  // Full stars for the integer part of the rating
  for (let i = 0; i < Math.floor(avgRating); i++) {
    stars += "★"; // Filled star
  }

  // Half star for the fractional part if it's 0.5 or more
  if (avgRating % 1 >= 0.5) {
    stars += "⯪"; // Half-filled star (using ⯪ symbol for half-star)
  }

  // Empty stars for the remaining part
  for (let i = Math.floor(avgRating); i < 5; i++) {
    stars += "☆"; // Empty star
  }

  starsContainer.innerHTML = stars;
}

// Render reviews on the page with fade-in animation
function renderReviews() {
  const reviewContainer = document.getElementById("review_of_the_user_who_logedin_id");
  reviewContainer.innerHTML = ""; // Clear existing reviews

  for (let i = 0; i < displayedReviewsCount && i < reviews.length; i++) {
    const review = reviews[i];
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");

    // Add fade-in animation class to each review
    setTimeout(() => {
      reviewElement.classList.add("visible");
    }, i * 100); // Delay each review for smooth fade-in effect

    let stars = "";
    for (let j = 0; j < 5; j++) {
      if (j < review.rating) {
        stars += "★"; // Filled star for the rating
      } else {
        stars += "☆"; // Empty star
      }
    }

    reviewElement.innerHTML = `
      <img src="${review.photo}" alt="${review.name}">
      <div class="review-content">
        <div class="review-name">${review.name}</div>
        <div class="review-comment">${review.comment}</div>
        <div class="stars">${stars}</div> <!-- Display the stars -->
      </div>
    `;

    reviewContainer.appendChild(reviewElement);
  }
}

// Submit review
document.getElementById("submit-review").addEventListener("click", async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if(!user)
  {
    alert("Login for post review!");
  }
  else
  {
    const comment = document.getElementById("review-comment").value;
  const rating = parseInt(document.getElementById("review-rating").value);

  // Get user info from localStorage
  
  const photo = user ? user.photoURL : "default-photo-url.jpg";
  const name = user ? user.displayName : "Anonymous";

  if (comment && !isNaN(rating) && rating > 0 && rating <= 5) {
    const newReview = {
      name: name,
      photo: photo,
      comment: comment,
      rating: rating,
    };

    try {
      // Send data to API
      const response = await fetch("https://rausnotes39-reviewsbackend.onrender.com/user/Addreview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });
      const result = await response.json();
      console.log("Review Added:", result);

      // Update UI with the new review
      reviews.unshift(newReview);
      renderReviews(); // Refresh displayed reviews

      // Reset form fields
      document.getElementById("review-comment").value = "";
      document.getElementById("review-rating").value = "";

      // Recalculate review statistics
      fetchReviews();
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  } else {
    alert("Please enter a valid comment and rating between 1 and 5.");
  }
  }
});

// Load more reviews
document.getElementById("show-more").addEventListener("click", () => {
  displayedReviewsCount += 5; // Load 5 more reviews
  renderReviews();
});

// Fetch and render initial reviews
fetchReviews();
