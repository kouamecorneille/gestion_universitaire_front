<template>
<div class="loader-container" v-if="loading">
    <div class="lds-dual-ring"></div>
  </div>
<Header /> 
<breadcrumb title="Adminssion à UTA" :image="bgFormation"/>
 <!-- Main Container Starts -->
<div class="container px-md-0 main-container">
    <h3 class="main-heading2 mt-0">Effectuer une demande d'admission en ligne</h3>
    <p>
    &nbsp;Ipsum dolor sit amet, eum illum dolore concludaturque ex, ius
    latine adipisci no. Pro at nullam laboramus definitiones.
    Mandamusconceptam omittantur cu cum. Brute appetere it scriptorem ei
    eam, ne vim velit novum nominati. Causae volutpat percipitur at sed ne.
    </p>
    <div class="box2 form-box">
    <div class="tabs-panel tabs-product">
        <div class="nav nav-tabs">
        <a
            class="nav-item nav-link active"
            data-toggle="tab"
            href="#new-admission"
            role="tab"
            aria-controls="tab-details"
            aria-selected="true"
            >Nouvelle admission</a
        >
        </div>
        <div class="tab-content clearfix">
        <div
            class="tab-pane fade show active"
            id="new-admission"
            role="tabpanel"
            aria-labelledby="tab-new-admission"
        >
            <form
            class="form-horizontal frm-submit-data"
            enctype="multipart/form-data"
            method="post"
            accept-charset="utf-8"
            >
            <div class="headers-line mt-3">
                <i class="fas fa-school"></i> Informations académiques
            </div>
            <div class="row">
                <div class="col-md-4">
                <div class="form-group">
                    <label>School Name <span class="required">*</span></label>
                    <input
                        type="text"
                        class="form-control"
                        name="schoolname"
                        value="Icon School & College"
                        />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label"
                        >Class <span class="required">*</span></label
                        >
                        <select
                        name="class_id"
                        class="form-control"
                        data-plugin-selecttwo=""
                        onchange="getSectionByClass(this.value)"
                        >
                        <option value="" selected="selected">Select</option>
                        <option value="1">Six</option>
                        <option value="2">Seven</option>
                        <option value="3">Eight</option>
                        <option value="4">Nine</option>
                        <option value="5">Ten</option>
                        <option value="8">Eight</option>
                        </select>
                        <span class="error"></span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label"
                        >Section <span class="required">*</span></label
                        >
                        <select
                        name="section"
                        class="form-control"
                        data-plugin-selecttwo=""
                        id="section_id"
                        >
                        <option value="" selected="selected">
                            Select Class First
                        </option>
                        </select>
                        <span class="error"></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                <div class="form-group">
                    <label for="admission_date"
                    >Admission Date <span class="required">*</span></label
                    >
                    <input
                    type="text"
                    class="form-control"
                    data-plugin-datepicker=""
                    name="admission_date"
                    readonly=""
                    value="2023-09-11"
                    id="admission_date"
                    autocomplete="off"
                    />
                    <span class="error"></span>
                </div>
                </div>
                <div class="col-md-6">
                <div class="form-group">
                    <label for="admission_date"
                    >Category <span class="required">*</span></label
                    >
                    <select
                    name="category"
                    class="form-control"
                    data-plugin-selecttwo=""
                    data-width="100%"
                    id="category_id"
                    data-minimum-results-for-search="Infinity"
                    >
                    <option value="" selected="selected">Select</option>
                    <option value="1">General</option>
                    <option value="2">Science</option>
                    <option value="3">Commerce</option>
                    <option value="9">General1</option>
                    </select>
                    <span class="error"></span>
                </div>
                </div>
            </div>

            <div class="headers-line mt-3">
                <i class="fas fa-user-graduate"></i> Informations de l'étudiant
            </div>
            <div class="row">
                <div class="col-md-4 mb-sm">
                <div class="form-group">
                    <label class="control-label"
                    >First Name <span class="required">*</span></label
                    >
                    <input
                    type="text"
                    class="form-control"
                    name="first_name"
                    value=""
                    autocomplete="off"
                    />
                    <span class="error"></span>
                </div>
                </div>
                <div class="col-md-4 mb-sm">
                <div class="form-group">
                    <label class="control-label"
                    >Last Name <span class="required">*</span></label
                    >
                    <input
                    type="text"
                    class="form-control"
                    name="last_name"
                    value=""
                    autocomplete="off"
                    />
                    <span class="error"></span>
                </div>
                </div>
                <div class="col-md-4 mb-sm">
                <div class="form-group">
                    <label class="control-label">Gender</label>
                    <select
                    name="gender"
                    class="form-control"
                    data-plugin-selecttwo=""
                    >
                    <option value="" selected="selected">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </select>
                    <span class="error"></span>
                </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                <div class="form-group">
                    <label for="birthday">Birthday</label>
                    <input
                        type="text"
                        class="form-control"
                        data-plugin-datepicker=""
                        name="birthday"
                        readonly=""
                        value=""
                        id="birthday"
                        autocomplete="off"
                        />
                    <span class="error"></span>
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                <div class="form-group">
                    <label for="mobile_no">Student Mobile No</label>
                    <input
                    type="text"
                    name="student_mobile_no"
                    class="form-control"
                    value=""
                    autocomplete="off"
                    />
                    <span class="error"></span>
                </div>
                </div>
                <div class="col-md-6">
                <div class="form-group">
                    <label for="email">Student Email</label>
                    <input
                    type="text"
                    name="student_email"
                    class="form-control"
                    value=""
                    autocomplete="off"
                    />
                    <span class="error"></span>
                </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4 mb-sm">
                <div class="form-group">
                    <label class="control-label">Mother Tongue</label>
                    <input
                    type="text"
                    class="form-control"
                    name="mother_tongue"
                    value=""
                    />
                    <span class="error"></span>
                </div>
                </div>
                <div class="col-md-4 mb-sm">
                <div class="form-group">
                    <label class="control-label">Religion</label>
                    <input
                    type="text"
                    class="form-control"
                    name="religion"
                    value=""
                    />
                    <span class="error"></span>
                </div>
                </div>
                <div class="col-md-4 mb-sm">
                <div class="form-group">
                    <label class="control-label">Caste</label>
                    <input
                    type="text"
                    class="form-control"
                    name="caste"
                    value=""
                    />
                    <span class="error"></span>
                </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">Present Address</label>
                    <textarea
                    class="form-control"
                    name="present_address"
                    rows="2"
                    placeholder="Enter Present Address"
                    ></textarea>
                    <span class="error"></span>
                </div>
                </div>
                <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">Permanent Address</label>
                    <textarea
                    class="form-control"
                    name="permanent_address"
                    rows="2"
                    placeholder="Enter Permanent Address"
                    ></textarea>
                    <span class="error"></span>
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-sm">
                <div class="form-group">
                    <label class="control-label">City</label>
                    <input
                    type="text"
                    class="form-control"
                    name="city"
                    value=""
                    />
                    <span class="error"></span>
                </div>
                </div>
                <div class="col-md-6 mb-sm">
                <div class="form-group">
                    <label class="control-label">State</label>
                    <input
                    type="text"
                    class="form-control"
                    name="state"
                    value=""
                    />
                    <span class="error"></span>
                </div>
                </div>
            </div>

            <!--custom fields details-->
            <div class="row" id="customFields"></div>

            <div class="row">
                <div class="col-md-12 mb-sm">
                <div class="form-group">
                    <label for="message">Student Photo</label>
                    <div class="custom-file">
                    <input
                        type="file"
                        name="student_photo"
                        class="custom-file-input"
                        id="photoFile"
                        accept=".jpg,.jpeg,.png,.bmp"
                        onchange="changeCustomUploader(this)"
                    />
                    <label class="custom-file-label" for="photoFile"
                        >Impoter une photo...</label
                    >
                    </div>
                    <span class="error"></span>
                </div>
                </div>
            </div>

            <!-- previous school details -->
            <div class="headers-line">
                <i class="fas fa-bezier-curve"></i>Informations sur l'école précédente
            </div>
            <div class="row">
                <div class="col-md-6 mb-sm">
                <div class="form-group">
                    <label class="control-label">School Name</label>
                    <input
                    type="text"
                    class="form-control"
                    name="school_name"
                    value=""
                    />
                    <span class="error"></span>
                </div>
                </div>
                <div class="col-md-6 mb-sm">
                <div class="form-group">
                    <label class="control-label">Qualification</label>
                    <input
                    type="text"
                    class="form-control"
                    name="qualification"
                    value=""
                    />
                    <span class="error"></span>
                </div>
                </div>
            </div>
            <div class="row mb-lg">
                <div class="col-md-12">
                <div class="form-group">
                    <label class="control-label">Remarks</label>
                    <textarea
                    name="previous_remarks"
                    rows="2"
                    class="form-control"
                    ></textarea>
                    <span class="error"></span>
                </div>
                </div>
            </div>

            <div class="headers-line mt-3">
                <i class="fas fa-user-tie"></i> Informations sur les parents / le tuteur
            </div>
            <div class="row">
                <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label"
                    >Guardian Name <span class="required">*</span></label
                    >
                    <input
                    type="text"
                    class="form-control"
                    name="guardian_name"
                    value=""
                    autocomplete="off"
                    />
                    <span class="error"></span>
                </div>
                </div>
                <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label"
                    >Relation <span class="required">*</span></label
                    >
                    <input
                    type="text"
                    name="guardian_relation"
                    class="form-control"
                    value=""
                    autocomplete="off"
                    />
                    <span class="error"></span>
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                <div class="form-group">
                    <label for="father_name">Father Name</label>
                    <input
                    type="text"
                    name="father_name"
                    class="form-control"
                    value=""
                    autocomplete="off"
                    />
                    <span class="error"></span>
                </div>
                </div>
                <div class="col-md-6">
                <div class="form-group">
                    <label for="mother_name">Mother Name</label>
                    <input
                    type="text"
                    name="mother_name"
                    class="form-control"
                    value=""
                    autocomplete="off"
                    />
                    <span class="error"></span>
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label"
                    >Occupation <span class="required">*</span></label
                    >
                    <input
                    type="text"
                    class="form-control"
                    name="guardian_occupation"
                    value=""
                    autocomplete="off"
                    />
                    <span class="error"></span>
                </div>
                </div>
                <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label"
                    >Income <span class="required">*</span></label
                    >
                    <input
                    class="form-control"
                    name="guardian_income"
                    value=""
                    type="text"
                    autocomplete="off"
                    />
                    <span class="error"></span>
                </div>
                </div>
                <div class="col-md-4">
                <div class="form-group">
                    <label class="control-label"
                    >Education <span class="required">*</span></label
                    >
                    <input
                    type="text"
                    class="form-control"
                    name="guardian_education"
                    value=""
                    autocomplete="off"
                    />
                    <span class="error"></span>
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label"
                    >Guardian Email <span class="required">*</span></label
                    >
                    <input
                    type="text"
                    class="form-control"
                    name="guardian_email"
                    value=""
                    autocomplete="off"
                    />
                    <span class="error"></span>
                </div>
                </div>
                <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label"
                    >Guardian Mobile No
                    <span class="required">*</span></label
                    >
                    <input
                    type="text"
                    class="form-control"
                    name="guardian_mobile_no"
                    value=""
                    autocomplete="off"
                    />
                    <span class="error"></span>
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                <div class="form-group">
                    <label for="message"
                    >Guardian Address <span class="required">*</span></label
                    >
                    <textarea
                    class="form-control"
                    name="guardian_address"
                    placeholder="Enter Address"
                    ></textarea>
                    <span class="error"></span>
                </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">Guardian City</label>
                    <input
                    class="form-control"
                    name="guardian_city"
                    value=""
                    type="text"
                    />
                    <span class="error"></span>
                </div>
                </div>
                <div class="col-md-6">
                <div class="form-group">
                    <label class="control-label">Guardian State</label>
                    <input
                    class="form-control"
                    name="guardian_state"
                    value=""
                    type="text"
                    />
                    <span class="error"></span>
                </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                <div class="form-group">
                    <label for="message">Guardian Photo</label>
                    <div class="custom-file">
                    <input
                        type="file"
                        class="custom-file-input"
                        name="guardian_photo"
                        id="guardianPhoto"
                        accept=".jpg,.jpeg,.png,.bmp"
                        onchange="changeCustomUploader(this)"
                    />
                    <label class="custom-file-label" for="guardianPhoto"
                        >Choose Guardian Photo...</label
                    >
                    </div>
                    <span class="error"></span>
                </div>
                </div>
            </div>

            <div class="headers-line mt-3">
                <i class="far fa-file-archive"></i> Ajouter des documents
            </div>
            <div class="form-group">
                <label for="message"
                >Ajouter des documents<span class="required">*</span></label
                >
                <div class="custom-file">
                <input
                    type="file"
                    name="upload_documents"
                    class="custom-file-input"
                    id="documentFile"
                    onchange="changeCustomUploader(this)"
                />
                <label class="custom-file-label" for="documentFile"
                    >Impoter des documents...</label
                >
                </div>
                <span class="error"></span>
            </div>

            <div class="accordion mb-3" id="accordion-faqs">
                <div class="card">
                <div class="card-header" id="faq1">
                    <h5
                    class="card-title"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                    >
                    <a>Termes & Conditions générales d'utilisation</a>
                    </h5>
                </div>
                <div
                    id="collapseOne"
                    class="collapse"
                    aria-labelledby="faq1"
                    data-parent="#accordion-faqs"
                >
                    <div class="card-body">
                    <ul>
                        <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                        </li>
                        <li>
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliq.
                        </li>
                        <li>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco quat. It is a long established fact.
                        </li>
                        <li>
                        That a reader will be distracted by the readable
                        content of a page when looking at its layout.
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                        </li>
                        <li>
                        Eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam.
                        </li>
                        <li>
                        Quis nostrud exercitation ullamco quat. It is a long
                        established fact that a reader will be distracted.
                        </li>
                        <li>
                        Readable content of a page when looking at its
                        layout.
                        </li>
                        <li>
                        The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters.
                        </li>
                        <li>
                        Opposed to using 'Content here, content here',
                        making it look like readable English.
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <button
                type="submit"
                class="btn btn-1"
                data-loading-text="<i class='fas fa-spinner fa-spin'></i> Processing"
            >
                <i class="fas fa-plus-circle"></i> Envoyer la demande
            </button>
            </form>
        </div>
        </div>
    </div>
    </div>
</div>
 <!-- Main Container Starts -->
<Footer />
</template>

<script>
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
import breadcrumb from "@/layouts/breadcrumb.vue";
import bgFormation from "@/uploads/frontend/banners/admission1.jpg";
export default {
  name: "AdminssionView",
  data() {
    return {
        bgFormation:bgFormation,
        loading:true,
    };
  },
  components: { Header, Footer,breadcrumb },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000)
  }
};
</script>
