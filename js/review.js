
let reviews = []; // Stores all reviews
let displayedReviewsCount = 5; // Number of reviews initially displayed
const apiUrl = "https://rausnotes39-reviewsbackend.onrender.com/user/Getreview"; // API to fetch reviews

// Fetch reviews from API
async function fetchReviews() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // Format reviews if necessary
    reviews = data.Review.map((review) => ({
      name: review.name,
      photo: review.photo,
      comment: review.comment,
      rating: review.rating,
    }));
    renderReviews(); // Display reviews
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
}

// Render reviews on the page
function renderReviews() {
  const reviewContainer = document.getElementById("review_of_the_user_who_logedin_id");
  reviewContainer.innerHTML = ""; // Clear existing reviews

  for (let i = 0; i < displayedReviewsCount && i < reviews.length; i++) {
    const review = reviews[i];
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");
    reviewElement.innerHTML = `
      <img src="${review.photo}" alt="${review.name}">
      <div class="review-content">
        <div class="review-name">${review.name}</div>
        <div class="review-comment">${review.comment}</div>
        <div class="stars">${"★".repeat(review.rating)}${"☆".repeat(
      5 - review.rating
    )}</div>
      </div>
    `;
    reviewContainer.appendChild(reviewElement);
  }
}

// Submit review
document.getElementById("submit-review").addEventListener("click", async () => {
  const comment = document.getElementById("review-comment").value;
  const rating = parseInt(document.getElementById("review-rating").value);

  // Get user info from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const photo = user ? user.photoURL : "default-photo-url.jpg";
  const name = user ? user.displayName : "Anonymous";

  if (comment && !isNaN(rating) && rating >= 0 && rating <= 5) {
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
      document.getElementById("review-comment").value = "";
      document.getElementById("review-rating").value = "";
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  } else {
    alert("Please enter a valid comment and rating (0-5).");
  }
});

// Load more reviews
document.getElementById("show-more").addEventListener("click", () => {
  displayedReviewsCount += 5; // Load 5 more reviews
  renderReviews();
});

// Fetch and render initial reviews
fetchReviews();
