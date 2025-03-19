document.addEventListener('DOMContentLoaded', function() {
  // Check viewport width - only run once on page load as requested
  const isMobileView = window.matchMedia('(max-width: 768px)').matches;
  
  // Function to place footnotes correctly based on viewport
  function placeFootnotes() {
    // Get all footnote references
    const footnoteReferences = document.querySelectorAll('.footnote-reference a');
    
    // Track processed footnotes to avoid duplicates
    const processedFootnotes = new Set();
    
    footnoteReferences.forEach(reference => {
      // Get the ID of the footnote this reference points to (without the '#')
      const href = reference.getAttribute('href');
      if (!href) return;
      
      const footnoteId = href.substring(1);
      const footnote = document.getElementById(footnoteId);
      
      // Skip if already processed or footnote doesn't exist
      if (!footnote || processedFootnotes.has(footnoteId)) return;
      
      // Mark as processed
      processedFootnotes.add(footnoteId);
      
      if (isMobileView) {
        // In mobile view:
        // 1. Don't reposition footnotes - let them be shown via :target in CSS
        // 2. Add a click event to smooth scroll to the footnote when clicked
        reference.addEventListener('click', function(e) {
          // Allow the default action to happen (navigate to anchor)
          // The :target CSS selector will make the footnote visible
          
          // Add a small delay to scroll after the footnote becomes visible
          setTimeout(() => {
            const targetFootnote = document.getElementById(footnoteId);
            if (targetFootnote) {
              targetFootnote.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 10);
        });
      } else {
        // In desktop view:
        // Find the paragraph containing this reference
        let paragraphElement = reference.closest('p');
        
        if (paragraphElement) {
          // Insert the footnote before the paragraph in the DOM
          paragraphElement.parentNode.insertBefore(footnote, paragraphElement);
          
          // Add data attributes to create a relationship
          const paragraphId = 'ref-para-' + footnoteId;
          paragraphElement.id = paragraphId;
          footnote.setAttribute('data-ref-paragraph', paragraphId);
        }
      }
    });
  }
  
  // Run once on page load with a small delay to ensure DOM is ready
  setTimeout(placeFootnotes, 50);
}); 