const inquirySelect = document.getElementById('inquiry');
const contactForm = document.getElementById('contactForm');

// Animation function
function animateFormElements() {
    const elements = contactForm.querySelectorAll('h3, label, input, select, textarea, button, .section');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 + (index * 50));
    });
}

// Initial form animation
if (contactForm) {
    setTimeout(animateFormElements, 300);
}

if (inquirySelect) {
    inquirySelect.addEventListener('change', function() {
        const selectedValue = this.value;
        
        // Fade out current form
        contactForm.style.opacity = '0';
        contactForm.style.transition = 'opacity 0.3s ease-out';
        
        // Wait for fade out then update content and fade in
        setTimeout(() => {
            if (selectedValue === '1') {
                // General Inquiry Form
                contactForm.innerHTML = `
                    <h3 data-step="1">Message</h3>
                    <label for="message">Your Message</label>
                    <textarea id="message" name="message" rows="4" placeholder="Type Your Message"></textarea>

                    <h3 data-step="2">Sender Information</h3>
                    <label for="fullName">Full Name</label>
                    <input type="text" id="fullName" name="fullName" placeholder="Type Your Full Name">

                    <div class="row">
                        <div>
                            <label for="phone">Phone Number</label>
                            <input type="text" id="phone" name="phone" placeholder="Type Your Phone Number">
                        </div>
                        <div>
                            <label for="email">Email <span class="optional">(Optional)</span></label>
                            <input type="email" id="email" name="email" placeholder="Type Your Email">
                        </div>
                    </div>

                    <h3 data-step="3">Organization <span class="optional">(Optional)</span></h3>
                    <label for="orgName">Organization Name</label>
                    <input type="text" id="orgName" name="orgName" placeholder="Type Your Organization Name">

                    <label for="title">Title</label>
                    <input type="text" id="title" name="title" placeholder="Type Your Title">

                    <label for="website">Website</label>
                    <input type="url" id="website" name="website" placeholder="Type Your Website">

                    <button type="submit">Submit</button>
                `;
                
            } else if (selectedValue === '2') {
                // Exhibition Inquiry Form
                contactForm.innerHTML = `
                    <h3 data-step="1">Exhibition</h3>
                    <label for="exhibition">Choose Exhibition</label>
                    <select id="exhibition" name="exhibition">
                        <option>There is a Woman in Every Color: Black Women in Art</option>
                        <option>Another Exhibition</option>
                        <option>Third Exhibition</option>
                    </select>

                    <label for="dates">Proposed Borrowing Dates</label>
                    <input type="text" id="dates" name="dates" placeholder="Type Your Proposed Borrowing Dates">

                    <h3 data-step="2">Organization Info</h3>
                    <label for="fullName">Full Name</label>
                    <input type="text" id="fullName" name="fullName" placeholder="Type Your Full Name">

                    <label for="orgName">Organization Name</label>
                    <input type="text" id="orgName" name="orgName" placeholder="Type Your Organization Name">

                    <label for="title">Title</label>
                    <input type="text" id="title" name="title" placeholder="Type Your Title">

                    <div class="row">
                        <div>
                            <label for="phone">Phone Number</label>
                            <input type="text" id="phone" name="phone" placeholder="Type Your Phone Number">
                        </div>
                        <div>
                            <label for="email">Email <span class="optional">(Optional)</span></label>
                            <input type="email" id="email" name="email" placeholder="Type Your Email">
                        </div>
                    </div>

                    <label for="budget">Choose Project Budget</label>
                    <select id="budget" name="budget">
                        <option>Project Budget</option>
                        <option>Less than $10,000</option>
                        <option>$10,000 - $50,000</option>
                        <option>$50,000+</option>
                    </select>

                    <label for="support">Choose Support Options</label>
                    <select id="support" name="support">
                        <option>Will you need funding support?</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>

                    <h3 data-step="3">Organization Physical Address</h3>
                    <label for="street">Street</label>
                    <input type="text" id="street" name="street" placeholder="Type Your Street">

                    <label for="city">City</label>
                    <input type="text" id="city" name="city" placeholder="Type Your City">

                    <label for="state">State</label>
                    <select id="state" name="state">
                        <option>State</option>
                        <option>California</option>
                        <option>New York</option>
                        <option>Texas</option>
                    </select>

                    <label for="zip">Zip Code</label>
                    <input type="text" id="zip" name="zip" placeholder="Type Your Zip Code">

                    <h3 data-step="4">Facility Report <span class="optional">(Optional)</span></h3>
                    <label for="facilityReport">Upload Your Files</label>
                    <input type="file" id="facilityReport" name="facilityReport" class="file-input">
                    <p class="file-note">Accepted file types: pdf, doc, docx, xls, xlsx. Max. file size: 25 MB.</p>

                    <button type="submit">Submit</button>
                `;
                
            } else if (selectedValue === '3') {
                // Fellow Programs Form
                contactForm.innerHTML = `
                    <div class="section">
                        <div class="section-header">
                            <div class="section-number">1</div>
                            <h2 class="section-title">Message</h2>
                        </div>
                        <div class="form-group">
                            <label for="message">Your Message</label>
                            <textarea id="message" name="message" placeholder="Type Your Message"></textarea>
                        </div>
                    </div>

                    <div class="section">
                        <div class="section-header">
                            <div class="section-number">2</div>
                            <h2 class="section-title">Sender Information</h2>
                        </div>
                        
                        <div class="form-group">
                            <label for="fullname">Full Name</label>
                            <input type="text" id="fullname" name="fullname" placeholder="Type Your Full Name">
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" placeholder="Type Your Phone Number">
                            </div>
                            <div class="form-group">
                                <label for="email">Email <span class="optional">(Optional)</span></label>
                                <input type="email" id="email" name="email" placeholder="Type Your Email">
                            </div>
                        </div>

                        <div class="organization-section">
                            <h3 class="organization-title">Organization <span class="optional">(Optional)</span></h3>
                            
                            <div class="form-group">
                                <label for="organization">Organization Name</label>
                                <input type="text" id="organization" name="organization" placeholder="Type Your Organization Name">
                            </div>

                            <div class="form-group">
                                <label for="title">Title</label>
                                <input type="text" id="title" name="title" placeholder="Type Your Title">
                            </div>

                            <div class="form-group">
                                <label for="website">Website</label>
                                <input type="text" id="website" name="website" placeholder="Type Your Website">
                            </div>
                        </div>
                    </div>

                    <button type="submit" class="submit-button">Submit</button>
                `;
                
            } else if (selectedValue === '4') {
                // Art Pool Collection Inquiry Form
                contactForm.innerHTML = `
                    <div class="section">
                        <div class="section-header">
                            <div class="section-number">1</div>
                            <div class="section-title">Collection</div>
                        </div>
                        
                        <div class="form-group">
                            <label>Choose Artwork</label>
                            <select name="artwork" id="artwork">
                                <option value="">Albert Bloch - Duell (Duel)</option>
                                <option value="artwork2">Other Artwork Option</option>
                                <option value="artwork3">Another Artwork Option</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Proposed Borrowing Dates</label>
                            <textarea name="borrowing_dates" placeholder="Type Your Proposed Borrowing Dates"></textarea>
                        </div>
                    </div>

                    <div class="section">
                        <div class="section-header">
                            <div class="section-number">2</div>
                            <div class="section-title">Organization Info</div>
                        </div>

                        <div class="form-group">
                            <label>Organization Name</label>
                            <input type="text" name="org_name" placeholder="Type Your Organization Name">
                        </div>

                        <div class="form-group">
                            <label>Full Name</label>
                            <input type="text" name="full_name" placeholder="Type Your Full Name">
                        </div>

                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" name="title" placeholder="Type Your Title">
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label>Phone Number</label>
                                <input type="tel" name="phone" placeholder="Type Your Phone Number">
                            </div>
                            <div class="form-group">
                                <label>Email (Optional)</label>
                                <input type="email" name="email" placeholder="Type Your Email">
                            </div>
                        </div>
                    </div>

                    <div class="section">
                        <div class="section-header">
                            <div class="section-number">3</div>
                            <div class="section-title">Organization Physical Address</div>
                        </div>

                        <div class="form-group">
                            <label>Street</label>
                            <input type="text" name="street" placeholder="Type Your Street">
                        </div>

                        <div class="form-group">
                            <label>City</label>
                            <input type="text" name="city" placeholder="Type Your City">
                        </div>

                        <div class="form-group">
                            <label>State</label>
                            <select name="state" id="state">
                                <option value="">State</option>
                                <option value="al">Alabama</option>
                                <option value="ak">Alaska</option>
                                <option value="az">Arizona</option>
                                <option value="ar">Arkansas</option>
                                <option value="ca">California</option>
                                <option value="co">Colorado</option>
                            </select>
                        </div>
                    </div>

                    <div class="section">
                        <div class="section-header">
                            <div class="section-number">4</div>
                            <div class="section-title">Facility Report <span style="color: #999; font-weight: normal;">(Optional)</span></div>
                        </div>

                        <div class="form-group">
                            <div class="file-upload" onclick="document.getElementById('facility_report').click()">
                                <input type="file" id="facility_report" name="facility_report" accept=".pdf,.doc,.docx,.xls,.xlsx">
                                📎 Upload Your Files
                            </div>
                            <div class="file-info">
                                Accepted file types: pdf, doc, docx, xls, xlsx.<br>
                                Max. file size: 25 MB.
                            </div>
                        </div>
                    </div>

                    <button type="submit" class="submit-btn">Submit</button>
                `;
                
            } else {
                // Clear form if no selection or invalid selection
                contactForm.innerHTML = '<p>Please select an inquiry type above.</p>';
            }
            
            // Animate the new elements in
            setTimeout(() => {
                animateFormElements();
                contactForm.style.opacity = '1';
            }, 50);
            
        }, 300); // Wait for fade out transition
    });
}