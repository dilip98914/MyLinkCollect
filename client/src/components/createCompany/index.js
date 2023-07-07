export default function () {
  return <>
    <div class="container-fluid">
      <div class="row main-content">
        <div class="col-md-8 content-fluid col-md-offset-2">
          <div class="panel panel-default">
            <form method="POST" action="https://crypto.jobs/companies/create" enctype="multipart/form-data">
              <input type="hidden" name="_token"
                value="AVHBpOJBvMDjWCtPE12QN7Ppr0XxIeJQ5qQFoeIc" /> <h3 class="title-page">Create New Company Page</h3>
              <div class="header-sec">
                <div class="header-banner">
                  <div class="cover-logo">
                    <img class="logo-preview" src="/imgs/company-default-banner.jpeg" />
                    <label for="file-logo-upload">
                      <span class="glyphicon glyphicon-pencil"></span>
                    </label>
                    <input id="file-logo-upload" type="file" name="logo" accept="image/*" />
                  </div>
                </div>
              </div>
              <div class="content-sec">
                <div class="form-group">
                  <label>*Company Name</label>
                  <input type="text" class="form-control bold-inp big-font-inp"
                    name="name" placeholder="Enter name" required />
                </div>
                <div class="form-group">
                  <label>Description</label>
                  <textarea class="form-control" name="about_description" rows="7" placeholder="Describe what your company does"></textarea>
                </div>
                <div class="form-group">
                  <label>Industries</label>
                  <select class="select2-multiple form-control" name="categories[]" multiple="multiple" id="select2Multiple">
                    <option value="AR/VR">AR/VR</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Animation">Animation</option>
                    <option value="Anime &amp; Comics">Anime &amp; Comics</option>
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                    <option value="Arts &amp; Culture">Arts &amp; Culture</option>
                    <option value="Biotech &amp; Biomedical">Biotech &amp; Biomedical</option>
                    <option value="Browsers">Browsers</option>
                    <option value="Business &amp; Finance">Business &amp; Finance</option>
                    <option value="Careers">Careers</option>
                    <option value="Centralised Exchange">Centralised Exchange</option>
                    <option value="College">College</option>
                    <option value="Community Management">Community Management</option>
                    <option value="Computer Hardware">Computer Hardware</option>
                    <option value="Concept Art">Concept Art</option>
                    <option value="Crowdfunding">Crowdfunding</option>
                    <option value="Custodians">Custodians</option>
                    <option value="DAOs">DAOs</option>
                    <option value="Data">Data</option>
                    <option value="DeFi">DeFi</option>
                    <option value="Decentralised Exchange">Decentralised Exchange</option>
                    <option value="Decentralised Identity">Decentralised Identity</option>
                    <option value="Decentralised Science">Decentralised Science</option>
                    <option value="Design">Design</option>
                    <option value="Developer Tools">Developer Tools</option>
                    <option value="Development Services">Development Services</option>
                    <option value="Digital Collectibles">Digital Collectibles</option>
                    <option value="Education">Education</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Environment">Environment</option>
                    <option value="Family &amp; Relationships">Family &amp; Relationships</option>
                    <option value="Fashion &amp; Beauty">Fashion &amp; Beauty</option>
                    <option value="Fiat On-ramp">Fiat On-ramp</option>
                    <option value="Films &amp; Movies">Films &amp; Movies</option>
                    <option value="Fine Art">Fine Art</option>
                    <option value="Food &amp; Cooking">Food &amp; Cooking</option>
                    <option value="Fundraising">Fundraising</option>
                    <option value="Gambling &amp; Casinos">Gambling &amp; Casinos</option>
                    <option value="Gaming &amp; eSports">Gaming &amp; eSports</option>
                    <option value="Governance">Governance</option>
                    <option value="Health &amp; Wellness">Health &amp; Wellness</option>
                    <option value="Healthcare &amp; Wellness">Healthcare &amp; Wellness</option>
                    <option value="Information Technology &amp; Services">Information Technology &amp; Services</option>
                    <option value="Infrastructure">Infrastructure</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Investments">Investments</option>
                    <option value="Legal">Legal</option>
                    <option value="Leisure &amp; Travel">Leisure &amp; Travel</option>
                    <option value="Lending &amp; Borrowing">Lending &amp; Borrowing</option>
                    <option value="Logistics &amp; Supply Chain Management">Logistics &amp; Supply Chain Management</option>
                    <option value="Marketplace">Marketplace</option>
                    <option value="Media Advertising">Media Advertising</option>
                    <option value="Media Production">Media Production</option>
                    <option value="Music">Music</option>
                    <option value="NFT">NFT</option>
                    <option value="News Sharing">News Sharing</option>
                    <option value="Oracle">Oracle</option>
                    <option value="Payments">Payments</option>
                    <option value="Performing Arts">Performing Arts</option>
                    <option value="Pharmaceuticals">Pharmaceuticals</option>
                    <option value="Photography">Photography</option>
                    <option value="Portfolios">Portfolios</option>
                    <option value="Privacy">Privacy</option>
                    <option value="Protocol">Protocol</option>
                    <option value="Public Relations &amp; Communications">Public Relations &amp; Communications</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Retail, Luxury Goods &amp; Jewelry">Retail, Luxury Goods &amp; Jewelry</option>
                    <option value="SDK">SDK</option>
                    <option value="Security">Security</option>
                    <option value="Skills Development">Skills Development</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Social Network">Social Network</option>
                    <option value="Sports &amp; Fitness">Sports &amp; Fitness</option>
                    <option value="Stablecoin">Stablecoin</option>
                    <option value="Sustainability">Sustainability</option>
                    <option value="Technology">Technology</option>
                    <option value="Ticketing">Ticketing</option>
                    <option value="Token">Token</option>
                    <option value="Token Swaps">Token Swaps</option>
                    <option value="Tools">Tools</option>
                    <option value="Trading &amp; Prediction Markets">Trading &amp; Prediction Markets</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Venture Capital &amp; Private Equity">Venture Capital &amp; Private Equity</option>
                    <option value="Virtual &amp; Augmented Reality">Virtual &amp; Augmented Reality</option>
                    <option value="Wallet">Wallet</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Location based in</label>
                  <input type="text" class="form-control" id="location" name="location"
                    placeholder="City, Country" />
                </div>
                <div class="form-group">
                  <label>Remote</label>
                  <select class="form-control" name="is_remote">
                    <option value> -- Select an option -- </option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Website URL</label>
                  <input type="url" class="form-control" name="website" value placeholder="Enter website url" />
                </div>
                <div class="form-group">
                  <label>Twitter URL</label>
                  <input type="url" class="form-control" name="twitter" value placeholder="Enter twitter url" />
                </div>
                <div class="form-group">
                  <label>Whitepaper URL</label>
                  <input type="url" class="form-control" name="whitepaper"
                    placeholder="e.g. https://bitcoin.org/bitcoin.pdf" />
                </div>
                <div class="form-group">
                  <label>Year Founded</label>
                  <select class="form-control" name="year_founded">
                    <option value> -- Select an option -- </option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                    <option value="1989">1989</option>
                    <option value="1988">1988</option>
                    <option value="1987">1987</option>
                    <option value="1986">1986</option>
                    <option value="1985">1985</option>
                    <option value="1984">1984</option>
                    <option value="1983">1983</option>
                    <option value="1982">1982</option>
                    <option value="1981">1981</option>
                    <option value="1980">1980</option>
                    <option value="1979">1979</option>
                    <option value="1978">1978</option>
                    <option value="1977">1977</option>
                    <option value="1976">1976</option>
                    <option value="1975">1975</option>
                    <option value="1974">1974</option>
                    <option value="1973">1973</option>
                    <option value="1972">1972</option>
                    <option value="1971">1971</option>
                    <option value="1970">1970</option>
                    <option value="1969">1969</option>
                    <option value="1968">1968</option>
                    <option value="1967">1967</option>
                    <option value="1966">1966</option>
                    <option value="1965">1965</option>
                    <option value="1964">1964</option>
                    <option value="1963">1963</option>
                    <option value="1962">1962</option>
                    <option value="1961">1961</option>
                    <option value="1960">1960</option>
                    <option value="1959">1959</option>
                    <option value="1958">1958</option>
                    <option value="1957">1957</option>
                    <option value="1956">1956</option>
                    <option value="1955">1955</option>
                    <option value="1954">1954</option>
                    <option value="1953">1953</option>
                    <option value="1952">1952</option>
                    <option value="1951">1951</option>
                    <option value="1950">1950</option>
                    <option value="1949">1949</option>
                    <option value="1948">1948</option>
                    <option value="1947">1947</option>
                    <option value="1946">1946</option>
                    <option value="1945">1945</option>
                    <option value="1944">1944</option>
                    <option value="1943">1943</option>
                    <option value="1942">1942</option>
                    <option value="1941">1941</option>
                    <option value="1940">1940</option>
                    <option value="1939">1939</option>
                    <option value="1938">1938</option>
                    <option value="1937">1937</option>
                    <option value="1936">1936</option>
                    <option value="1935">1935</option>
                    <option value="1934">1934</option>
                    <option value="1933">1933</option>
                    <option value="1932">1932</option>
                    <option value="1931">1931</option>
                    <option value="1930">1930</option>
                    <option value="1929">1929</option>
                    <option value="1928">1928</option>
                    <option value="1927">1927</option>
                    <option value="1926">1926</option>
                    <option value="1925">1925</option>
                    <option value="1924">1924</option>
                    <option value="1923">1923</option>
                    <option value="1922">1922</option>
                    <option value="1921">1921</option>
                    <option value="1920">1920</option>
                    <option value="1919">1919</option>
                    <option value="1918">1918</option>
                    <option value="1917">1917</option>
                    <option value="1916">1916</option>
                    <option value="1915">1915</option>
                    <option value="1914">1914</option>
                    <option value="1913">1913</option>
                    <option value="1912">1912</option>
                    <option value="1911">1911</option>
                    <option value="1910">1910</option>
                    <option value="1909">1909</option>
                    <option value="1908">1908</option>
                    <option value="1907">1907</option>
                    <option value="1906">1906</option>
                    <option value="1905">1905</option>
                    <option value="1904">1904</option>
                    <option value="1903">1903</option>
                    <option value="1902">1902</option>
                    <option value="1901">1901</option>
                    <option value="1900">1900</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Company Size</label>
                  <select class="form-control" name="company_size">
                    <option value> -- Select an option -- </option>
                    <option value="0 - 1 Employees">0 - 1 Employees</option>
                    <option value="2 - 10 Employees">2 - 10 Employees</option>
                    <option value="11 - 50 Employees">11 - 50 Employees</option>
                    <option value="51 - 200 Employees">51 - 200 Employees</option>
                    <option value="201 - 500 Employees">201 - 500 Employees</option>
                    <option value="501 - 1,000 Employees">501 - 1,000 Employees</option>
                    <option value="1,001 - 5,000 Employees">1,001 - 5,000 Employees</option>
                    <option value="5,0001 - 10,000 Employees">5,0001 - 10,000 Employees</option>
                    <option value="&gt;10,000 Employees">&gt;10,000 Employees</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Community Size</label>
                  <input type="number" class="form-control num-inp" name="community_size" placeholder="Amount(e.g. 12,000)" />
                </div>
                <div class="form-group">
                  <label>Funding</label>
                  <input type="text" class="form-control" name="funding" value placeholder="e.g. $100m Series C" />
                </div>
                <div class="form-group">
                  <label>Pays in Crypto</label>
                  <select class="form-control" name="pay_in_crypto">
                    <option value> -- Select an option -- </option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                  </select>
                </div>
              </div>
              <div class="row btn-sec">
                <a href="https://crypto.jobs/companies" class="btn btn-default pull-left">
                  Cancel
                </a>
                <button type="submit" class="btn btn-success pull-right">
                  Create Company Page
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </>
}