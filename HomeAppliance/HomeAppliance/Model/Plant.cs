using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HomeAppliance.Model
{
    [Serializable]
    public class Plant
    {
        public int id { get; set; }
        public string plantName { get; set; }
        public int maxConsumptionLimit { get; set; }
        public int currentConsumption { get; set; }

    }
}
