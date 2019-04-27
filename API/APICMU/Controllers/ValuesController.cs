using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace APICMU.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            List<string> subHeadings = new List<string>();
            List<string> mainHeadings = new List<string>();
            
            Dictionary<string, List<string>> dic = new Dictionary<string, List<string>>();
            var fileStream = new FileStream("DataFiles/main/DataFile.txt", FileMode.Open, FileAccess.Read);
            using (var streamReader = new StreamReader(fileStream, Encoding.UTF8))
            {
                
                string line;
                int count = 0;
                while ((line = streamReader.ReadLine()) != null)
                {
                    if (line.Split('|')[1] == "SubHeading")
                        subHeadings.Add(line.Split('|')[0]);
                    if (line.Split('|')[1] == "MainHeading")
                        mainHeadings.Add(line.Split('|')[0]);
                    
                }
                dic.Add("MainHeading", mainHeadings);
                dic.Add("SubHeading", subHeadings);
            }
            return Ok(JsonConvert.SerializeObject(dic));
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
