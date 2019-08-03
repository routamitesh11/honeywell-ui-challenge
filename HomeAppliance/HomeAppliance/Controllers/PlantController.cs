using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using HomeAppliance.EnergyConsumptionServices;

namespace HomeAppliance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlantController : ControllerBase
    {
        [HttpGet]
        public GetPlantDetails(int plantid)
        {

        }


    }
}